import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Subscription} from "rxjs";
declare var Swiper;

@Component({
  selector: 'flora-knowledge-base',
  templateUrl: 'knowledgeBase.component.html',
  styleUrls: ['knowledgeBase.component.css']
})
export class KnowledgeBaseComponent implements OnInit {

  private knowledges: Array<any> = [];
  private getKnowledgeBaseSub: Subscription;

  constructor(private backendService:BackendService, sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.getKnowledgeBaseSub = this.backendService.getKnowledges().subscribe(
      data => {
        this.knowledges = data;

        setTimeout(function(){
          this.initSwiper();
        }.bind(this),0);

      }
    );
  }

  public initSwiper(){
    let swiper = new Swiper('.knowledge-swiper', {
      pagination: '.swiper-pagination',
      direction: 'vertical',
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 30,
      mousewheelControl: true
    });
  }

}
