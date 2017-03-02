import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {DomSanitizer} from "@angular/platform-browser";
declare var Swiper;

@Component({
  selector: 'flora-knowledge-base',
  templateUrl: 'knowledgeBase.component.html',
  styleUrls: ['knowledgeBase.component.css']
})
export class KnowledgeBaseComponent implements OnInit {

  constructor(private backendService:BackendService, sanitizer:DomSanitizer) { }

  ngOnInit() {
  }

  public initSwiper(){
    let swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      direction: 'vertical',
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 30,
      mousewheelControl: true
    });
  }

}
