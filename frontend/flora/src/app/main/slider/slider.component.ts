import {Component, OnInit, Input, ElementRef, AfterViewInit} from '@angular/core';
import {ScrollService} from "../../service/scroll.service";

@Component({
  selector: 'flora-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {

  @Input() private direction:string;
  private menuItems:Array<any> = [];
  private activeElement:any;

  constructor(private elementRef:ElementRef, private scrollService:ScrollService) {



  }

  ngOnInit() {
    this.elementRef.nativeElement.querySelector(".slider").classList.add(this.direction);
    this.scrollService.getScrollDirection().subscribe( data => {
      this.activeElement.classList.remove("active");
      this.activeElement = data == "down" ? this.activeElement.nextElementSibling : this.activeElement.previousElementSibling;
      this.activeElement.classList.add("active");
    } );
  }

  ngAfterViewInit(){
    this.activeElement = this.elementRef.nativeElement.querySelector(".active");
  }

  onMenuItemClick(menuItem:any) {
    document.querySelector("."+menuItem.anchor).scrollIntoView({
      behavior: 'smooth'
    });
  }

}
