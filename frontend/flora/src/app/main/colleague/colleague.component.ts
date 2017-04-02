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
  private swiperOptions: any;

  constructor(private backendService:BackendService, private sanitizer: DomSanitizer) {
    this.swiperOptions = {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    };
  }

  ngOnInit() {

    this.getColleaguesSubscription = this.backendService.getColleagues().subscribe(
      data => {
        this.colleagues = data;
      }
    );
  }
  ngOnDestroy(){
    this.getColleaguesSubscription.unsubscribe();
  }

  getImageUrl(fileName: string){
    this.sanitizer.bypassSecurityTrustStyle("url("+environment.imagesUrl + fileName+")");
    return environment.imagesUrl + fileName;
  }

  getCVUrl(fileName: string){
    // this.sanitizer.bypassSecurityTrustStyle("url("+environment.imagesUrl + fileName+")");
    return environment.cvsUrl + fileName;
  }
}
