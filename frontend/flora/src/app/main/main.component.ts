import {Component, OnInit, AfterViewInit, Inject, HostListener} from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";
import {ScrollService} from "../service/scroll.service";

@Component({
  selector: 'flora-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  private homeElement:any;
  private activeElement:any;
  private menuItems:any;

  constructor(@Inject(DOCUMENT) private document: Document, private scrollService:ScrollService) {
    this.menuItems = [
      {
        title : "kezdőlap",
        icon : "house-icon",
        anchor : "home"
      }/*,
       {
       title : "galeria",
       icon : "book-icon",
       anchor : "gallery"
       }*/,
      {
        title : "esemenyek",
        icon : "event-icon",
        anchor : "events"
      },
      {
        title : "munkatarsak",
        icon : "colleges-icon",
        anchor : "colleges"
      },
      {
        title : "tudasbazis",
        icon : "know-icon",
        anchor : "library"
      },
      {
        title : "tamogatas",
        icon : "donation-icon",
        anchor : "donation"
      },
      {
        title : "önkéntesség",
        icon : "volunteer-icon",
        anchor : "self"
      },
      {
        title : "rolunk",
        icon : "us-icon",
        anchor : "us"
      },
      {
        title : "kapcsolat",
        icon : "contact-icon",
        anchor : "contact"
      }
    ];
  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    this.homeElement =  this.document.querySelectorAll('[scroll]')[0];
    this.activeElement = this.homeElement;
  }

  @HostListener("window:scroll", [])
  onWindowScroll(args) {
    let offset = this.document.querySelector("body").getBoundingClientRect().top;
    if(offset < -70){
      this.document.querySelector(".header").classList.add("header-fixed")
    }
    if(offset > -110){
      this.document.querySelector(".header").classList.remove("header-fixed")
    }

    let bcr = this.activeElement.getBoundingClientRect();
    if( /*bcr.bottom == 0 || */bcr.bottom < this.activeElement.offsetHeight/2){
      this.activeElement = this.activeElement.nextElementSibling;
      this.scrollService.scrollDown();
    }

    if( bcr.top > this.activeElement.offsetHeight/2){
      this.activeElement = this.activeElement.previousElementSibling;
      this.scrollService.scrollUp();
    }
  }

}
