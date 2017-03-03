import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[floraSwiper]'
})
export class SwiperDirective {

  constructor(private elementRef:ElementRef) { }

}
