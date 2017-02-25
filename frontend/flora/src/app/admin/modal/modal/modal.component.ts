import {Component, OnInit, Input, OnDestroy, EventEmitter, Output, ViewChild} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from "@angular/forms";
import {Headers, Response, Http} from "@angular/http";
import {Observable, Subscription} from "rxjs";
import {BackendService} from "../../../service/backend.service";
import {UploaderComponent} from "../../uploader/uploader.component";

@Component({
  selector: 'flora-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  private IMAGES_URL: string = "http://localhost:8080/static/images/";
  public showModal = false;
  private isNew = false;
  private newsForm: FormGroup;
  private saveSubscription: Subscription;
  private image;
  @Input() public news: any;
  @Output() newsSaved: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild(UploaderComponent) uploaderComponent: UploaderComponent;


  constructor(private formBuilder: FormBuilder, private backendService:BackendService) {
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
    const body = JSON.stringify(this.newsForm.value);
    this.saveSubscription = this.backendService.saveNews(body, this.isNew).subscribe(
      data => {
        this.isNew = false;
        data.date = new Date(data.date);
        this.newsForm.setValue(data);
        return this.newsSaved.emit(data);
      }
    );
  }

}
