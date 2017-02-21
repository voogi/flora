import { Injectable } from '@angular/core';
import {Subject, Observable} from "rxjs";

@Injectable()
export class ScrollService {

  private scrollDirection:Subject<string> = new Subject<string>();

  constructor() { }

  scrollDown(){
    this.scrollDirection.next("down");
  }

  scrollUp(){
    this.scrollDirection.next("up");
  }

  getScrollDirection():Observable<any>{
    return this.scrollDirection;
  }

}
