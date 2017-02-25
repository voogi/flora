import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Headers, Http, Response} from "@angular/http";

@Component({
  selector: 'flora-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  private bURL: string = "http://localhost:8080";

  public news: Object[];
  public sortBy = "title";
  private newsSub: Subscription;
  private selectedRow: any;


  constructor(private http: Http) {
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
    this.http.delete(this.bURL + "/api/news/"  + this.selectedRow["id"])
      .subscribe((resp) => {this.loadNews(); this.selectedRow = null})
  }

  private loadNews() {
    this.newsSub = this.getNews().subscribe(
      data => this.news = data
    );
  }


  private getNews(): Observable<any> {
    return this.http.get(this.bURL + "/api/news")
      .map((response: Response) => response.json());
  }
}
