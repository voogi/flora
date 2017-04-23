import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Http, Response, Headers, URLSearchParams, RequestOptions} from "@angular/http";
import {environment} from "../../environments/environment";
import {User} from "../login/user";

@Injectable()
export class BackendService {

  isLoggedIn: boolean = false;
  loggedInUser: User = new User();

  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    "Authorization":  "Basic " + btoa( this.loggedInUser.username || "" + ":" + this.loggedInUser.password || "")
  });

  constructor(private http: Http) {
  }

  login(userObject: User): Observable<boolean> {
    return this.http.post(environment.bUrl + "/login", userObject)
      .map(response => response.json() as User)
      .map(user => {
        if (!User.isNull(user)) {
          this.isLoggedIn = true;
          this.loggedInUser = userObject;
          return true
        } else {
          this.isLoggedIn = false;
          return false
        }
      })
      .catch(this.handleError);
  }

  logOut(): Observable<boolean> {
    this.isLoggedIn = !this.isLoggedIn;
    return Observable.of(false);
  }

  getNews(): Observable<any> {
    return this.http.get(environment.bUrl + "/api/news")
      .map((response: Response) => response.json())
  }

  getActiveNews(): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set("active", "true");
    let requestOptions = new RequestOptions();
    requestOptions.search = params;
    return this.http.get(environment.bUrl + "/api/news", requestOptions)
      .map((response: Response) => response.json())
  }

  getNewsById(id: number): Observable<any> {
    return this.http.get(environment.bUrl + "/api/news/" + id)
      .map((response: Response) => response.json())
  }

  getColleagues(): Observable<any> {
    return this.http.get(environment.bUrl + "/api/colleague")
      .map((response: Response) => response.json())
  }

  getEvents(): Observable<any> {
    return this.http.get(environment.bUrl + "/api/event")
      .map((response: Response) => response.json())
  }

  saveEvent(body: any, isNew: boolean): Observable<any> {
    return this.http[isNew ? "post" : "put"](environment.bUrl + "/api/event", body, {headers: this.headers})
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete(environment.bUrl + "/api/event/" + id);
  }


  deleteColleague(id: string): Observable<any> {
    return this.http.delete(environment.bUrl + "/api/colleague/" + id);
  }

  saveColleague(body: any, isNew: boolean): Observable<any> {
    return this.http[isNew ? "post" : "put"](environment.bUrl + "/api/colleague", body, {headers: this.headers})
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  deleteNews(id: string): Observable<any> {
    return this.http.delete(environment.bUrl + "/api/news/" + id);
  }

  saveNews(body: any, isNew: boolean): Observable<any> {
    return this.http[isNew ? "post" : "put"](environment.bUrl + "/api/news", body, {headers: this.headers})
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  activateNews(body: any): Observable<any> {
    return this.http.post(environment.bUrl + "/api/news/activate", body, {headers: this.headers})
      .catch(this.handleError);
  }

  inActivateNews(body: any): Observable<any> {
    return this.http.post(environment.bUrl + "/api/news/inactivate", body, {headers: this.headers})
      .catch(this.handleError);
  }

  getKnowledges(): Observable<any> {
    return this.http.get(environment.bUrl + "/api/knowledge")
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }

  deleteKnowledge(id: string): Observable<any> {
    return this.http.delete(environment.bUrl + "/api/knowledge/" + id);
  }

  saveKnowledge(body: any, isNew: boolean): Observable<any> {
    return this.http[isNew ? "post" : "put"](environment.bUrl + "/api/knowledge", body, {headers: this.headers})
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  subscribe(body:any): Observable<any>{
    return this.http.post(environment.bUrl + "/api/newsletter", body, {headers: this.headers})
      .map((data: Response) => data.json());
      // .catch(this.handleError);
  }

  getALlSubscriber(): Observable<any> {
    return this.http.get(environment.bUrl + "/api/newsletter")
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getSubscriberEmails(): Observable<any> {
    return this.http.get(environment.bUrl + "/api/newsletter/emails")
      .map((response: Response) => response.text())
      .catch(this.handleError);
  }

  getAllVolunteer(): Observable<any> {
    return this.http.get(environment.bUrl + "/api/volunteer")
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  saveVolunteer(body:any): Observable<any> {
    return this.http.post(environment.bUrl + "/api/volunteer", body, {headers: this.headers})
      .map((data: Response) => data.json());
    // .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error.json())
  }


}
