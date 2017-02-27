import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Http, Response, Headers} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class BackendService {

  private headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) {
  }

  getNews(): Observable<any> {
    return this.http.get(environment.bUrl + "/api/news")
      .map((response: Response) => response.json())
  }

  getColleagues(): Observable<any> {
    return this.http.get(environment.bUrl + "/api/colleague")
      .map((response: Response) => response.json())
  }

  deleteNews(id: string): Observable<any> {
    return this.http.delete(environment.bUrl + "/api/news/" + id);
  }

  saveNews(body: any, isNew: boolean): Observable<any> {
    return this.http[isNew ? "post" : "put"](environment.bUrl + "/api/news", body, {headers: this.headers})
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  newsLetterReg(body:any):Observable<any>{
    // TODO newsletter api
    return this.http.post(environment.bUrl + "",body, {headers: this.headers})
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error.json())
  }


}
