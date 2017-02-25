import {Component, OnInit, EventEmitter, Output, ViewChild} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
import {Response} from "@angular/http";

@Component({
  selector: 'flora-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: "http://localhost:8080/api/file/upload"});
  @Output() imageUploaded: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('fileInput') fileInput: any;

  constructor() { }

  ngOnInit() {

    this.uploader.onCompleteItem = (fileItem, response: string) => {
      this.imageUploaded.emit(response);
    }
  }

}
