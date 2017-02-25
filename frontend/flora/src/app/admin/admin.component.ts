import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Headers, Http, Response} from "@angular/http";
import {BackendService} from "../service/backend.service";

@Component({
  selector: 'flora-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  public news: Object[];
  public sortBy = "title";
  private newsSub: Subscription;
  private selectedRow: any;


  constructor(private backendService:BackendService) {
  }

  ngOnInit() {
    this.loadNews();
  }

  ngOnDestroy() {
    this.newsSub.unsubscribe();
  }

  onNewsSaved() {
    this.loadNews();
    this.selectedRow = null;
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

}
