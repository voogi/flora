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
  public searchTitle = "";
  public searchColumn = "title";
  private newsSub: Subscription;
  private activationSub: Subscription;
  private selectedRow: any;
  public froalaOptions: Object = {
    imageUploadURL: environment.bUrl + "/api/file/image"
  };

  public shortDescContent;
  public descContent;
  public setShortDescription;
  public setDescription;
  public shortDescControl;
  public descControl;
  public activeNews:number = 0;



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
    this.activationSub.unsubscribe();
  }

  onNewsSaved() {

  }

  onActivation(newsItem){
    if(newsItem.active){
      this.activationSub = this.backendService.inActivateNews(newsItem.id).subscribe(
        data => this.loadNews()
      );
    } else {
      this.activationSub = this.backendService.activateNews(newsItem.id).subscribe(
        data =>  this.loadNews()
      );
    }
  }

  public initShortDesc(initControls) {
    initControls.initialize();
    this.shortDescControl = initControls;
    this.setShortDescription = function(value: string) {
      this.shortDescControl.getEditor()('html.set', value);
    };
  }

  public initDesc(initControls) {
    initControls.initialize();
    this.descControl = initControls;
    this.setDescription = function(value: string) {
      this.descControl.getEditor()('html.set', value);
    };
  }

  onDelete(){
    this.backendService.deleteNews(this.selectedRow["id"]).subscribe(
      (resp) => {this.loadNews(); this.selectedRow = null}
    );
  }

  private loadNews() {
    this.newsSub = this.backendService.getNews().subscribe(
      data => {
        this.news = data;
        this.activeNews = 0;
        for(let i in data){
          if(data[i].active){
            this.activeNews++;
          }
        }
      }
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

  onLoadValue(id: number) {
    this.backendService.getNewsById(id).subscribe(
      data => {
        this.showModal = true;
        this.isNew = false;
        data.date = new Date(data.date);
        this.uploaderComponent.uploader.clearQueue();
        this.uploaderComponent.fileInput.nativeElement.value = "";
        this.image = data.image;
        this.newsForm.setValue(data);
        this.setDescription(data.description);
        this.setShortDescription(data.shortDescription);
      }
    );

  }

  onNew() {
    this.showModal = true;
    this.isNew = true;
    this.image = null;
    this.setDescription('');
    this.setShortDescription('');
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
