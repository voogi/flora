"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var platform_browser_1 = require("@angular/platform-browser");
var AppComponent = (function () {
    function AppComponent(document, scrollService) {
        this.document = document;
        this.scrollService = scrollService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.homeElement = this.document.querySelectorAll('[scroll]')[0];
        this.activeElement = this.homeElement;
    };
    AppComponent.prototype.onWindowScroll = function () {
        var bcr = this.activeElement.getBoundingClientRect();
        if (bcr.bottom < this.activeElement.offsetHeight / 2) {
            this.activeElement = this.activeElement.nextElementSibling;
            this.scrollService.scrollDown();
        }
        if (bcr.top > this.activeElement.offsetHeight / 2) {
            this.activeElement = this.activeElement.previousElementSibling;
            this.scrollService.scrollUp();
        }
    };
    __decorate([
        core_1.HostListener("window:scroll", [])
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'flora-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __param(0, core_1.Inject(platform_browser_1.DOCUMENT))
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
