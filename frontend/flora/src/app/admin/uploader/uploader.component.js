"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_file_upload_1 = require("ng2-file-upload");
var environment_1 = require("../../../environments/environment");
var UploaderComponent = (function () {
    function UploaderComponent() {
        this.imageUploaded = new core_1.EventEmitter();
        this.showModal = false;
    }
    UploaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.isCV ? environment_1.environment.bUrl + "/api/file/upload/cv" : environment_1.environment.bUrl + "/api/file/upload/image";
        this.uploader = new ng2_file_upload_1.FileUploader({ url: url });
        this.uploader.onCompleteItem = function (fileItem, response) {
            _this.imageUploaded.emit(response);
            _this.onClose();
        };
    };
    UploaderComponent.prototype.onClose = function () {
        this.showModal = false;
        this.uploader.clearQueue();
        this.fileInput.nativeElement.value = "";
    };
    UploaderComponent.prototype.onOpen = function () {
        this.showModal = true;
        this.uploader.clearQueue();
        this.fileInput.nativeElement.value = "";
    };
    return UploaderComponent;
}());
__decorate([
    core_1.Output()
], UploaderComponent.prototype, "imageUploaded", void 0);
__decorate([
    core_1.ViewChild('fileInput')
], UploaderComponent.prototype, "fileInput", void 0);
__decorate([
    core_1.Input()
], UploaderComponent.prototype, "isCV", void 0);
__decorate([
    core_1.Input()
], UploaderComponent.prototype, "title", void 0);
UploaderComponent = __decorate([
    core_1.Component({
        selector: 'flora-uploader',
        templateUrl: './uploader.component.html',
        styleUrls: ['./uploader.component.css']
    })
], UploaderComponent);
exports.UploaderComponent = UploaderComponent;
