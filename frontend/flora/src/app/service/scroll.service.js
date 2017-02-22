"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var rxjs_1 = require("rxjs");
var ScrollService = (function () {
    function ScrollService() {
        this.scrollDirection = new rxjs_1.Subject();
    }
    ScrollService.prototype.scrollDown = function () {
        this.scrollDirection.next("down");
    };
    ScrollService.prototype.scrollUp = function () {
        this.scrollDirection.next("up");
    };
    ScrollService.prototype.getScrollDirection = function () {
        return this.scrollDirection;
    };
    ScrollService = __decorate([
        core_1.Injectable()
    ], ScrollService);
    return ScrollService;
}());
exports.ScrollService = ScrollService;
