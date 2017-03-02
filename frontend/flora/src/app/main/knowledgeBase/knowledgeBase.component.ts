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
  private swiperOptions : any;

  constructor(private backendService:BackendService, sanitizer:DomSanitizer) {
    this.swiperOptions = {
      paginationClickable: true,
      pagination: '.swiper-pagination'
    }
  }

  ngOnInit() {
    this.getKnowledgeBaseSub = this.backendService.getKnowledges().subscribe(
      data => {
        this.knowledges = data;
      }
    );
  }

}
