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
  }

  onLoadValue(id: number) {
    this.backendService.getNewsById(id).subscribe(
      data => {
        this.showModal = true;
        this.isNew = false;
        data.date = new Date(data.date);
        this.newsForm.setValue(data);
      }
    );

  }

  onNew() {
    this.showModal = true;
    this.isNew = true;
    this.newsForm.reset();
    this.newsForm.controls['description'].setValue("");
    this.newsForm.controls['shortDescription'].setValue("");
  }

  onSubmit() {
    let form = this.newsForm.value;
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
