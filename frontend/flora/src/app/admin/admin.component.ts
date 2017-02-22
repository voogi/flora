import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Headers, Http, Response} from "@angular/http";

@Component({
  selector: 'flora-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy  {

  private bURL: string = "http://localhost:8080";

  private headers: Headers = new Headers({
    'Content-Type' : 'application/json'
  });

  public news: Object[];
  private newsSub: Subscription;


  constructor(private http: Http) { }

  ngOnInit() {

    this.newsSub = this.getNews().subscribe(
      data => this.news = data
    );
  }

  ngOnDestroy() {
    this.newsSub.unsubscribe();
  }


  private getNews() :Observable<any> {
    return this.http.get(this.bURL + "/api/news")
      .map( (response: Response) => response.json() );
  }
}
