import {Component, OnInit, Input, OnDestroy, EventEmitter, Output, ViewChild} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from "@angular/forms";
import {Headers, Response, Http} from "@angular/http";
import {Observable, Subscription} from "rxjs";
import {UploaderComponent} from "../../uploader/uploader.component";

@Component({
  selector: 'flora-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  private bURL: string = "http://localhost:8080";
  private IMAGES_URL: string = "http://localhost:8080/static/images/";
  private headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  public showModal = false;
  private isNew = false;
  private newsForm: FormGroup;
  private saveSubscription: Subscription;
  private image;
  @Input() public news: any;
  @Output() newsSaved: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild(UploaderComponent) uploaderComponent: UploaderComponent;


  constructor(private formBuilder: FormBuilder, private http: Http) {
    this.newsForm = formBuilder.group({
      'id': [''],
      'title': ['', Validators.required],
      'shortDescription': [''],
      'description': [''],
      'date': [''],
      'image': [''],
      'active': ['']
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.saveSubscription.unsubscribe();
  }

  onImageUploaded(fileName:string){
    this.image = fileName;
  }
  getImage(){
    return this.IMAGES_URL + this.image;
  }

  onDeleteImage(){
    this.image = null;
    this.uploaderComponent.uploader.clearQueue();
    this.uploaderComponent.fileInput.nativeElement.value = "";
  }

  onLoadValue() {
    this.showModal = true;
    this.isNew = false;
    this.news.date = new Date(this.news.date);
    this.uploaderComponent.uploader.clearQueue();
    this.uploaderComponent.fileInput.nativeElement.value = "";
    this.image = this.news.image;
    this.newsForm.setValue(this.news);
  }

  onNew() {
    this.showModal = true;
    this.isNew = true;
    this.uploaderComponent.uploader.clearQueue();
    this.uploaderComponent.fileInput.nativeElement.value = "";
    this.newsForm.reset();
  }

  onSubmit() {
    this.saveSubscription = this.saveNews().subscribe(
      data => {
        this.isNew = false;
        data.date = new Date(data.date);
        this.newsForm.setValue(data);
        return this.newsSaved.emit(data);
      }
    );
  }

  saveNews() {
    let form = this.newsForm.value;
    form["image"] = this.image;
    const body = JSON.stringify(form);
    if (this.isNew) {
      return this.http.post(this.bURL + "/api/news", body, {headers: this.headers})
        .map((data: Response) => data.json())
        .catch(this.handleError);
    }

    return this.http.put(this.bURL + "/api/news", body, {headers: this.headers})
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error.json())
  }

}
