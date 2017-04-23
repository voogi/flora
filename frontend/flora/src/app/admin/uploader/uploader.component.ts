import {Component, OnInit, EventEmitter, Output, ViewChild, Input} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
import {environment} from "../../../environments/environment";
import {Response} from "@angular/http";

@Component({
  selector: 'flora-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  public uploader: FileUploader;
  @Output() imageUploaded: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('fileInput') fileInput: any;
  @Input() isCV: boolean;
  @Input() title: string;
  public showModal = false;

  constructor() { }

  ngOnInit() {
    let url = this.isCV ? environment.bUrl + "/api/file/upload/cv" : environment.bUrl + "/api/file/upload/image";
    this.uploader = new FileUploader({url: url});
    this.uploader.onCompleteItem = (fileItem, response: string) => {
      this.imageUploaded.emit(response);
      this.onClose();
    }
  }

  onClose(){
    this.showModal = false;
    this.uploader.clearQueue();
    this.fileInput.nativeElement.value = "";
  }

  onOpen(){
    this.showModal = true;
    this.uploader.clearQueue();
    this.fileInput.nativeElement.value = "";
  }

}
