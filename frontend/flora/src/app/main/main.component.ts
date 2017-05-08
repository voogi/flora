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
  private lastFocusedMenuItem:any = null;

  constructor(@Inject(DOCUMENT) private document: Document, private scrollService:ScrollService) {
    this.menuItems = [
      {
        title : "Kezdőlap",
        icon : "house-icon",
        anchor : "home"
      }/*,
       {
       title : "galeria",
       icon : "book-icon",
       anchor : "gallery"
       }*/,
      {
        title : "Események",
        icon : "event-icon",
        anchor : "events"
      },
      {
        title : "Munkatársak",
        icon : "colleges-icon",
        anchor : "colleges"
      },
      {
        title : "Tudásbázis",
        icon : "know-icon",
        anchor : "library"
      },
      {
        title : "Támogatás",
        icon : "donation-icon",
        anchor : "donation"
      },
      {
        title : "Önkéntesség",
        icon : "volunteer-icon",
        anchor : "self"
      },
      {
        title : "Rólunk",
        icon : "us-icon",
        anchor : "us"
      },
      {
        title : "Kapcsolat",
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

  onMenuItemClick(menuItem:any) {

    let htmlElement  = <HTMLElement>document.querySelector("."+menuItem);
    let headerElement = document.querySelector(".header").getBoundingClientRect().height;
    let calculatedTop = htmlElement.offsetTop - headerElement;

    if(menuItem == "events" && (this.lastFocusedMenuItem == "home" || this.lastFocusedMenuItem == null)){
      calculatedTop -= 77;
    }

    window.scroll({
      top:  calculatedTop,
      left: 0, behavior: 'smooth'
    });

    this.lastFocusedMenuItem = menuItem;

  }

  @HostListener("window:scroll", [])
  onWindowScroll(args) {
    let offset = this.document.querySelector("body").getBoundingClientRect().top;
    if(offset < -70){
      this.document.querySelector(".header").classList.add("header-fixed");
      this.document.querySelector(".header-title").classList.remove("col-lg-10");
      this.document.querySelector(".header-title").classList.remove("col-md-10");
      this.document.querySelector(".header-title").classList.remove("col-sm-10");
      this.document.querySelector(".header-title").classList.add("col-lg-8");
      this.document.querySelector(".header-title").classList.add("col-md-8");
      this.document.querySelector(".header-title").classList.add("col-sm-6");
    }
    if(offset > -110){
      this.document.querySelector(".header").classList.remove("header-fixed");
      this.document.querySelector(".header-title").classList.remove("col-lg-8");
      this.document.querySelector(".header-title").classList.remove("col-md-8");
      this.document.querySelector(".header-title").classList.remove("col-sm-6");
      this.document.querySelector(".header-title").classList.add("col-lg-10");
      this.document.querySelector(".header-title").classList.add("col-md-10");
      this.document.querySelector(".header-title").classList.add("col-sm-10");
      this.lastFocusedMenuItem = null;
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
