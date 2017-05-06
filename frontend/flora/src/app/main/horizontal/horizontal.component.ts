import {
  Component, OnInit, OnDestroy, ViewChild
} from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {Subscription} from "rxjs";
import {environment} from "../../../environments/environment";
import {DomSanitizer} from "@angular/platform-browser";
import {DetailedViewComponent} from "../../detailed-view/detailed-view.component";

@Component({
  selector: 'flora-horizontal',
  templateUrl: 'horizontal.component.html',
  styleUrls: ['horizontal.component.css']
})
export class HorizontalComponent implements OnInit, OnDestroy {

  private getNewsSubscription: Subscription;
  private news: Array<any> = [];
  private newsOptions: any = {};
  @ViewChild(DetailedViewComponent) detailedView: DetailedViewComponent;

  constructor(private backendService: BackendService, private sanitizer: DomSanitizer) {
    this.newsOptions = {
      paginationClickable: true,
      // spaceBetween: 30,
      // autoplay: "3000",
      // loop: true,
      autoplayDisableOnInteraction: false,
      pagination: '.swiper-pagination'
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

  onDetailedView(item:any){
    item.bDetailedView = !item.bDetailedView;
  }

  getImageUrl(fileName: string) {
    this.sanitizer.bypassSecurityTrustStyle("url(" + environment.imagesUrl + fileName + ")");
    return environment.imagesUrl + fileName;
  }

}
