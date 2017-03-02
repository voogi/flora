import {Component, OnInit, OnDestroy} from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {environment} from "../../../environments/environment";
import {Subscription} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";
declare var Swiper;

@Component({
  selector: 'flora-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.css']
})
export class ColleagueComponent implements OnInit, OnDestroy {

  private colleagues: Array<any> = [];
  private getColleaguesSubscription:Subscription;

  constructor(private backendService:BackendService, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.getColleaguesSubscription = this.backendService.getColleagues().subscribe(
      data => {

        this.colleagues = data;

        setTimeout(function(){
          this.initSwiper();
        }.bind(this),0);

      }
    );
  }
  ngOnDestroy(){
    this.getColleaguesSubscription.unsubscribe();
  }



  public initSwiper(){
    var swiper = new Swiper('.colleague-swiper', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'/*,
       spaceBetween: 30*/
    });
  }

  getImageUrl(fileName: string){
    this.sanitizer.bypassSecurityTrustStyle("url("+environment.imagesUrl + fileName+")");
    return environment.imagesUrl + fileName;
  }
}
