import {
  Component, OnInit, AfterContentInit, OnChanges, OnDestroy
} from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {Subscription} from "rxjs";
import {environment} from "../../../environments/environment";
import {DomSanitizer} from "@angular/platform-browser";
declare var Swiper;

@Component({
  selector: 'flora-horizontal',
  templateUrl: 'horizontal.component.html',
  styleUrls: ['horizontal.component.css']
})
export class HorizontalComponent implements OnInit, OnDestroy{

  private getNewsSubscription:Subscription;
  private news: Array<any> = [];

  constructor(private backendService:BackendService, private sanitizer: DomSanitizer) {
    // this.initSwiper();
  }

  public initSwiper(){
    var swiper = new Swiper('.news-swiper', {
      pagination: '.news-pagination',
      paginationClickable: true,
      nextButton: '.news-left',
      prevButton: '.news-right'/*,
       spaceBetween: 30*/
    });
  }
  ngOnInit() {

    this.getNewsSubscription = this.backendService.getNews().subscribe(
      data => {

        this.news = data;

        setTimeout(function(){
          this.initSwiper();
        }.bind(this),0);

      }
    );
  }

  ngOnDestroy(){
    this.getNewsSubscription.unsubscribe();
  }

  getImageUrl(fileName: string){
    this.sanitizer.bypassSecurityTrustStyle("url("+environment.imagesUrl + fileName+")");
    return environment.imagesUrl + fileName;
  }

}
