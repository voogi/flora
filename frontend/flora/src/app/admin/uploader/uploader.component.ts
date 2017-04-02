import {Component, OnInit, EventEmitter, Output, ViewChild, Input} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
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

  constructor() { }

  ngOnInit() {
    let url = this.isCV ? "http://localhost:8080/api/file/upload/cv" : "http://localhost:8080/api/file/upload/image";
    this.uploader = new FileUploader({url: url});
    this.uploader.onCompleteItem = (fileItem, response: string) => {
      this.imageUploaded.emit(response);
    }
  }

}
