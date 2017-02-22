"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SliderComponent = (function () {
    function SliderComponent(elementRef, scrollService) {
        this.elementRef = elementRef;
        this.scrollService = scrollService;
        this.menuItems = [];
        this.menuItems = [
            {
                title: "home",
                icon: "house-icon",
                anchor: "home"
            },
            {
                title: "rolunk",
                icon: "gallery-icon",
                anchor: "contact"
            },
            {
                title: "galeria",
                icon: "book-icon",
                anchor: "gallery"
            },
            {
                title: "tamogatas",
                icon: "banknotes-icon",
                anchor: "donation"
            },
            {
                title: "projektek",
                icon: "project-icon",
                anchor: "projects"
            }
        ];
    }
    SliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.elementRef.nativeElement.querySelector(".slider").classList.add(this.direction);
        this.scrollService.getScrollDirection().subscribe(function (data) {
            _this.activeElement.classList.remove("active");
            _this.activeElement = data == "down" ? _this.activeElement.nextElementSibling : _this.activeElement.previousElementSibling;
            _this.activeElement.classList.add("active");
        });
    };
    SliderComponent.prototype.ngAfterViewInit = function () {
        this.activeElement = this.elementRef.nativeElement.querySelector(".active");
    };
    SliderComponent.prototype.onMenuItemClick = function (menuItem) {
        document.querySelector("." + menuItem.anchor).scrollIntoView({
            behavior: 'smooth'
        });
    };
    __decorate([
        core_1.Input()
    ], SliderComponent.prototype, "direction", void 0);
    SliderComponent = __decorate([
        core_1.Component({
            selector: 'flora-slider',
            templateUrl: 'slider.component.html',
            styleUrls: ['slider.component.css']
        })
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
