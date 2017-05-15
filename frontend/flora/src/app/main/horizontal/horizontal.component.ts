import {
  Component, OnInit, OnDestroy, ViewChild, ElementRef, Inject
} from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {Subscription} from "rxjs";
import {environment} from "../../../environments/environment";
import {DomSanitizer, DOCUMENT} from "@angular/platform-browser";
import {DetailedViewComponent} from "../../detailed-view/detailed-view.component";
import {trigger, state, style, transition, animate} from "@angular/animations";
import {KSSwiperContainer} from "angular2-swiper";

@Component({
  selector: 'flora-horizontal',
  templateUrl: 'horizontal.component.html',
  styleUrls: ['horizontal.component.css']
})
export class HorizontalComponent implements OnInit, OnDestroy {

  private getNewsSubscription: Subscription;
  private news: Array<any> = [];
  private newsOptions: any = {};
  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

  constructor(@Inject(DOCUMENT) private document: any,private backendService: BackendService, private sanitizer: DomSanitizer) {
    this.newsOptions = {
      paginationClickable: true,
      // spaceBetween: 30,
      // autoplay: "3000",
      // loop: true,
      // autoplayDisableOnInteraction: true,
      pagination: '.swiper-pagination',
      onSlideChangeStart  : function(){
        for(let n of this.news){
          n.descHeight = 0;
        }
      }.bind(this)
    }
  }

  ngOnInit() {

    this.getNewsSubscription = this.backendService.getActiveNews().subscribe(
      data => {
        this.news = data.map( data => {
          let _data = data;
          _data.bDetailedView = false;
          return _data;
        } );
      }
    );
  }

  ngOnDestroy() {
    this.getNewsSubscription.unsubscribe();
  }

  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }

  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }

  onDetailedView(item:any){
    item.bDetailedView = !item.bDetailedView;
    let index = 0;
    for(let news of this.news){
      if(news.id == item.id){
        index = this.news.indexOf(news);
      }
    }

    let growDiv = this.document.querySelectorAll('.item-desc')[index];
    if (growDiv.clientHeight) {
      item.descHeight = 0;
    } else {
      let wrapper = this.document.querySelectorAll('.desc-wrapper')[index];
      item.descHeight = wrapper.clientHeight + "px";
    }
  }

  getImageUrl(fileName: string) {
    this.sanitizer.bypassSecurityTrustStyle("url(" + environment.imagesUrl + fileName + ")");
    return environment.imagesUrl + fileName;
  }

}
