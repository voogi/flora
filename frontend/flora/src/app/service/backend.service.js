"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/http");
var environment_1 = require("../../environments/environment");
var user_1 = require("../login/user");
var BackendService = (function () {
    function BackendService(http) {
        this.http = http;
        this.isLoggedIn = false;
        this.loggedInUser = new user_1.User();
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
    }
    BackendService.prototype.login = function (userObject) {
        var _this = this;
        return this.http.post(environment_1.environment.bUrl + "/login", userObject)
            .map(function (response) { return response.json(); })
            .map(function (user) {
            if (!user_1.User.isNull(user)) {
                _this.isLoggedIn = true;
                _this.loggedInUser = userObject;
                _this.headers.append("Authorization", "Basic " + btoa(_this.loggedInUser.username + ":" + _this.loggedInUser.password));
                return true;
            }
            else {
                _this.isLoggedIn = false;
                return false;
            }
        })
            .catch(this.handleError);
    };
    BackendService.prototype.logOut = function () {
        this.isLoggedIn = !this.isLoggedIn;
        return rxjs_1.Observable.of(false);
    };
    BackendService.prototype.getNews = function () {
        return this.http.get(environment_1.environment.bUrl + "/api/news")
            .map(function (response) { return response.json(); });
    };
    BackendService.prototype.getActiveNews = function () {
        var params = new http_1.URLSearchParams();
        params.set("active", "true");
        var requestOptions = new http_1.RequestOptions();
        requestOptions.search = params;
        return this.http.get(environment_1.environment.bUrl + "/api/news", requestOptions)
            .map(function (response) { return response.json(); });
    };
    BackendService.prototype.getNewsById = function (id) {
        return this.http.get(environment_1.environment.bUrl + "/api/news/" + id)
            .map(function (response) { return response.json(); });
    };
    BackendService.prototype.getColleagues = function () {
        return this.http.get(environment_1.environment.bUrl + "/api/colleague")
            .map(function (response) { return response.json(); });
    };
    BackendService.prototype.getEvents = function () {
        return this.http.get(environment_1.environment.bUrl + "/api/event")
            .map(function (response) { return response.json(); });
    };
    BackendService.prototype.saveEvent = function (body, isNew) {
        return this.http[isNew ? "post" : "put"](environment_1.environment.bUrl + "/api/event", body, { headers: this.headers })
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    BackendService.prototype.deleteEvent = function (id) {
        return this.http.delete(environment_1.environment.bUrl + "/api/event/" + id);
    };
    BackendService.prototype.deleteColleague = function (id) {
        return this.http.delete(environment_1.environment.bUrl + "/api/colleague/" + id);
    };
    BackendService.prototype.saveColleague = function (body, isNew) {
        return this.http[isNew ? "post" : "put"](environment_1.environment.bUrl + "/api/colleague", body, { headers: this.headers })
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    BackendService.prototype.deleteNews = function (id) {
        return this.http.delete(environment_1.environment.bUrl + "/api/news/" + id);
    };
    BackendService.prototype.saveNews = function (body, isNew) {
        return this.http[isNew ? "post" : "put"](environment_1.environment.bUrl + "/api/news", body, { headers: this.headers })
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    BackendService.prototype.activateNews = function (body) {
        return this.http.post(environment_1.environment.bUrl + "/api/news/activate", body, { headers: this.headers })
            .catch(this.handleError);
    };
    BackendService.prototype.inActivateNews = function (body) {
        return this.http.post(environment_1.environment.bUrl + "/api/news/inactivate", body, { headers: this.headers })
            .catch(this.handleError);
    };
    BackendService.prototype.getKnowledges = function () {
        return this.http.get(environment_1.environment.bUrl + "/api/knowledge")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BackendService.prototype.deleteKnowledge = function (id) {
        return this.http.delete(environment_1.environment.bUrl + "/api/knowledge/" + id);
    };
    BackendService.prototype.saveKnowledge = function (body, isNew) {
        return this.http[isNew ? "post" : "put"](environment_1.environment.bUrl + "/api/knowledge", body, { headers: this.headers })
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    BackendService.prototype.subscribe = function (body) {
        return this.http.post(environment_1.environment.bUrl + "/api/newsletter", body, { headers: this.headers })
            .map(function (data) { return data.json(); });
        // .catch(this.handleError);
    };
    BackendService.prototype.getALlSubscriber = function () {
        return this.http.get(environment_1.environment.bUrl + "/api/newsletter", { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BackendService.prototype.getSubscriberEmails = function () {
        return this.http.get(environment_1.environment.bUrl + "/api/newsletter/emails", { headers: this.headers })
            .map(function (response) { return response.text(); })
            .catch(this.handleError);
    };
    BackendService.prototype.getAllVolunteer = function () {
        return this.http.get(environment_1.environment.bUrl + "/api/volunteer", { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BackendService.prototype.saveVolunteer = function (body) {
        return this.http.post(environment_1.environment.bUrl + "/api/volunteer", body, { headers: this.headers })
            .map(function (data) { return data.json(); });
        // .catch(this.handleError);
    };
    BackendService.prototype.handleError = function (error) {
        console.log(error);
        return rxjs_1.Observable.throw(error.json());
    };
    return BackendService;
}());
BackendService = __decorate([
    core_1.Injectable()
], BackendService);
exports.BackendService = BackendService;
