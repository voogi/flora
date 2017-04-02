import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {UploaderComponent} from "../uploader/uploader.component";
import {BackendService} from "../../service/backend.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'flora-admin-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class AdminEventComponent implements OnInit, OnDestroy {

  public showModal = false;
  private isNew = false;
  private eventForm: FormGroup;
  private saveSubscription: Subscription;
  private image;

  public events: Array<any>;
  public sortBy = "title";
  public searchTitle = "";
  public searchColumn = "title";
  private eventSub: Subscription;
  private selectedRow: any;
  public froalaOptions: Object = {
    imageUploadURL: environment.bUrl + "/api/file/image"
  };


  constructor(private formBuilder: FormBuilder, private backendService:BackendService) {
    this.eventForm = formBuilder.group({
      'id': [''],
      'title': ['', Validators.required],
      'address': [''],
      'description': [''],
      'date': [''],
      'image': ['']
    });
  }

  ngOnInit() {
    this.loadEvents();
  }

  ngOnDestroy(): void {
    this.saveSubscription.unsubscribe();
    this.eventSub.unsubscribe();
  }

  onDelete(){
    this.backendService.deleteNews(this.selectedRow["id"]).subscribe(
      (resp) => {this.loadEvents(); this.selectedRow = null}
    );
  }

  private loadEvents() {
    this.eventSub = this.backendService.getEvents().subscribe(
      data => this.events = data
    );
  }

  onImageUploaded(fileName:string){
    this.image = fileName;
  }
  getImage(){
    return environment.imagesUrl + this.image;
  }

  onDeleteImage(){
    this.image = null;
  }

  onLoadValue() {
    this.showModal = true;
    this.isNew = false;
    this.selectedRow.date = new Date(this.selectedRow.date);
    this.eventForm.setValue(this.selectedRow);
  }

  onNew() {
    this.showModal = true;
    this.isNew = true;
    this.eventForm.reset();
    this.eventForm.controls['description'].setValue("");
  }

  onSubmit() {
    let form = this.eventForm.value;
    const body = JSON.stringify(form);
    this.saveSubscription = this.backendService.saveEvent(body, this.isNew).subscribe(
      data => {
        this.isNew = false;
        data.date = new Date(data.date);
        this.eventForm.setValue(data);
        this.loadEvents();
        this.selectedRow = null;
      }
    );
  }

}
