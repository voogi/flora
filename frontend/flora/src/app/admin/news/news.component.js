"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var environment_1 = require("../../../environments/environment");
var NewsComponent = (function () {
    function NewsComponent(formBuilder, backendService) {
        this.formBuilder = formBuilder;
        this.backendService = backendService;
        this.showModal = false;
        this.isNew = false;
        this.sortBy = "title";
        this.searchTitle = "";
        this.searchColumn = "title";
        this.froalaOptions = {
            imageUploadURL: environment_1.environment.bUrl + "/api/file/image"
        };
        this.activeNews = 0;
        this.newsForm = formBuilder.group({
            'id': [''],
            'title': ['', forms_1.Validators.required],
            'shortDescription': [''],
            'description': [''],
            'date': [''],
            'image': [''],
            'active': ['']
        });
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.loadNews();
    };
    NewsComponent.prototype.ngOnDestroy = function () {
        if (this.saveSubscription) {
            this.saveSubscription.unsubscribe();
        }
        if (this.newsSub) {
            this.newsSub.unsubscribe();
        }
        if (this.activationSub) {
            this.activationSub.unsubscribe();
        }
    };
    NewsComponent.prototype.onNewsSaved = function () {
    };
    NewsComponent.prototype.onActivation = function (newsItem) {
        var _this = this;
        if (newsItem.active) {
            this.activationSub = this.backendService.inActivateNews(newsItem.id).subscribe(function (data) { return _this.loadNews(); });
        }
        else {
            this.activationSub = this.backendService.activateNews(newsItem.id).subscribe(function (data) { return _this.loadNews(); });
        }
    };
    NewsComponent.prototype.onDelete = function () {
        var _this = this;
        this.backendService.deleteNews(this.selectedRow["id"]).subscribe(function (resp) { _this.loadNews(); _this.selectedRow = null; });
    };
    NewsComponent.prototype.loadNews = function () {
        var _this = this;
        this.newsSub = this.backendService.getNews().subscribe(function (data) {
            _this.news = data;
            _this.activeNews = 0;
            for (var i in data) {
                if (data[i].active) {
                    _this.activeNews++;
                }
            }
        });
    };
    NewsComponent.prototype.onImageUploaded = function (fileName) {
        this.image = fileName;
    };
    NewsComponent.prototype.getImage = function () {
        return environment_1.environment.imagesUrl + this.image;
    };
    NewsComponent.prototype.onDeleteImage = function () {
        this.image = null;
    };
    NewsComponent.prototype.onLoadValue = function (id) {
        var _this = this;
        this.backendService.getNewsById(id).subscribe(function (data) {
            _this.showModal = true;
            _this.isNew = false;
            data.date = new Date(data.date);
            _this.newsForm.setValue(data);
        });
    };
    NewsComponent.prototype.onNew = function () {
        this.showModal = true;
        this.isNew = true;
        this.newsForm.reset();
        this.newsForm.controls['description'].setValue("");
        this.newsForm.controls['shortDescription'].setValue("");
    };
    NewsComponent.prototype.onSubmit = function () {
        var _this = this;
        var form = this.newsForm.value;
        var body = JSON.stringify(form);
        this.saveSubscription = this.backendService.saveNews(body, this.isNew).subscribe(function (data) {
            _this.isNew = false;
            data.date = new Date(data.date);
            _this.newsForm.setValue(data);
            _this.loadNews();
            _this.selectedRow = null;
            _this.showModal = !_this.showModal;
        });
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    core_1.Component({
        selector: 'flora-news',
        templateUrl: 'news.component.html',
        styleUrls: ['news.component.css']
    })
], NewsComponent);
exports.NewsComponent = NewsComponent;
