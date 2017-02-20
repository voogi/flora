import {Component, OnInit, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'flora-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() private direction:string;

  constructor(private elementRef:ElementRef) {

  }

  ngOnInit() {
    this.elementRef.nativeElement.querySelector(".slider").classList.add(this.direction);
  }

}
