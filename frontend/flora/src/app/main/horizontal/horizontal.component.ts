import { Component, OnInit } from '@angular/core';
declare var Swiper;

@Component({
  selector: 'flora-horizontal',
  templateUrl: 'horizontal.component.html',
  styleUrls: ['horizontal.component.css']
})
export class HorizontalComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'/*,
      spaceBetween: 30*/
    });
  }

}
