import {Component, OnInit, Input, OnDestroy, EventEmitter, Output, ViewChild} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {BackendService} from "../../service/backend.service";
import {UploaderComponent} from "../uploader/uploader.component";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'flora-news',
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {
  public showModal = false;
  private isNew = false;
  private newsForm: FormGroup;
  private saveSubscription: Subscription;
  private image;
  @ViewChild(UploaderComponent) uploaderComponent: UploaderComponent;

  public news: Array<any>;
  public sortBy = "title";
  private newsSub: Subscription;
  private selectedRow: any;
  public froalaOptions: Object = {
    imageUploadURL: environment.bUrl + "/api/file/image"
  };

  public shortDescContent;
  public descContent;
  public clearShortEditor;
  public clearEditor;
  public shortDescControl;
  public descControl;



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
    this.loadNews();

  }

  ngOnDestroy(): void {
    this.saveSubscription.unsubscribe();
    this.newsSub.unsubscribe();
  }

  onNewsSaved() {

  }

  public initShortDesc(initControls) {
    initControls.initialize();
    this.shortDescControl = initControls;
    this.clearShortEditor = function() {
      this.shortDescControl.getEditor()('html.set', '');
    };
  }

  public initDesc(initControls) {
    initControls.initialize();
    this.descControl = initControls;
    this.clearEditor = function() {
      this.descControl.getEditor()('html.set', '');
    };
  }

  onDelete(){
    this.backendService.deleteNews(this.selectedRow["id"]).subscribe(
      (resp) => {this.loadNews(); this.selectedRow = null}
    );
  }

  private loadNews() {
    this.newsSub = this.backendService.getNews().subscribe(
      data => this.news = data
    );
  }

  onImageUploaded(fileName:string){
    this.image = fileName;
  }
  getImage(){
    return environment.imagesUrl + this.image;
  }

  onDeleteImage(){
    this.image = null;
    this.uploaderComponent.uploader.clearQueue();
    this.uploaderComponent.fileInput.nativeElement.value = "";
  }

  onLoadValue() {
    this.showModal = true;
    this.isNew = false;
    this.selectedRow.date = new Date(this.selectedRow.date);
    this.uploaderComponent.uploader.clearQueue();
    this.uploaderComponent.fileInput.nativeElement.value = "";
    this.image = this.selectedRow.image;
    this.clearEditor();
    this.clearShortEditor();
    this.newsForm.setValue(this.selectedRow);
  }

  onNew() {
    this.showModal = true;
    this.isNew = true;
    this.image = null;
    this.clearEditor();
    this.clearShortEditor();
    this.uploaderComponent.uploader.clearQueue();
    this.uploaderComponent.fileInput.nativeElement.value = "";
    this.newsForm.reset();
  }

  onSubmit() {
    let form = this.newsForm.value;
    form["image"] = this.image;
    const body = JSON.stringify(form);
    this.saveSubscription = this.backendService.saveNews(body, this.isNew).subscribe(
      data => {
        this.isNew = false;
        data.date = new Date(data.date);
        this.newsForm.setValue(data);
        this.loadNews();
        this.selectedRow = null;
      }
    );
  }

}
