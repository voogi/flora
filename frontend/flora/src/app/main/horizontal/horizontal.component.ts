import {
  Component, OnInit, OnDestroy
} from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {Subscription} from "rxjs";
import {environment} from "../../../environments/environment";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'flora-horizontal',
  templateUrl: 'horizontal.component.html',
  styleUrls: ['horizontal.component.css']
})
export class HorizontalComponent implements OnInit, OnDestroy {

  private getNewsSubscription: Subscription;
  private news: Array<any> = [];
  private newsOptions: any = {};

  constructor(private backendService: BackendService, private sanitizer: DomSanitizer) {
    this.newsOptions = {
      paginationClickable: true,
      // spaceBetween: 30,
      pagination: '.swiper-pagination'
    }
  }

  ngOnInit() {

    this.getNewsSubscription = this.backendService.getNews().subscribe(
      data => {
        this.news = data;
      }
    );
  }

  ngOnDestroy() {
    this.getNewsSubscription.unsubscribe();
  }

  getImageUrl(fileName: string) {
    this.sanitizer.bypassSecurityTrustStyle("url(" + environment.imagesUrl + fileName + ")");
    return environment.imagesUrl + fileName;
  }

}
