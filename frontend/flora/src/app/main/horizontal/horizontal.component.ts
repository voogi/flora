import {
  Component, OnInit, AfterContentInit, OnChanges
} from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {Subscription} from "rxjs";
declare var Swiper;

@Component({
  selector: 'flora-horizontal',
  templateUrl: 'horizontal.component.html',
  styleUrls: ['horizontal.component.css']
})
export class HorizontalComponent implements OnInit{

  private getNewsSubscription:Subscription;
  private news: Array<any> = [];

  constructor(private backendService:BackendService) {
    // this.initSwiper();
  }

  public initSwiper(){
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'/*,
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

}
