import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {BackendService} from "../../service/backend.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'flora-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit, OnDestroy {

  public showModal = false;
  private isNew = false;
  private newsForm: FormGroup;
  private saveSubscription: Subscription;

  public news: Array<any>;
  public sortBy = "title";
  public searchTitle = "";
  public searchColumn = "title";
  private newsSub: Subscription;
  private selectedRow: any;
  public froalaOptions: Object = {
    imageUploadURL: environment.bUrl + "/api/file/image"
  };


  constructor(private formBuilder: FormBuilder, private backendService:BackendService) {
    this.newsForm = formBuilder.group({
      'id': [''],
      'title': ['', Validators.required],
      'description': [''],
      'date': [''],
      'creator': [''],
      'active': ['']
    });
  }

  ngOnInit() {
    this.loadNews();
  }

  ngOnDestroy(): void {
    if(this.saveSubscription){
      this.saveSubscription.unsubscribe();
    }
    if(this.newsSub){
      this.newsSub.unsubscribe();
    }
  }

  onNewsSaved() {

  }

  onDelete(){
    this.backendService.deleteKnowledge(this.selectedRow["id"]).subscribe(
      (resp) => {this.loadNews(); this.selectedRow = null}
    );
  }

  private loadNews() {
    this.newsSub = this.backendService.getKnowledges().subscribe(
      data => this.news = data
    );
  }

  onLoadValue() {
    this.showModal = true;
    this.isNew = false;
    this.selectedRow.date = new Date(this.selectedRow.date);
    this.newsForm.setValue(this.selectedRow);
  }

  onNew() {
    this.showModal = true;
    this.isNew = true;
    this.newsForm.reset();
    this.newsForm.controls['description'].setValue("");
  }

  onSubmit() {
    let form = this.newsForm.value;
    const body = JSON.stringify(form);
    this.saveSubscription = this.backendService.saveKnowledge(body, this.isNew).subscribe(
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
