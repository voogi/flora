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
  @ViewChild(UploaderComponent) uploaderComponent: UploaderComponent;

  public events: Array<any>;
  public sortBy = "title";
  private eventSub: Subscription;
  private selectedRow: any;


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
    this.uploaderComponent.uploader.clearQueue();
    this.uploaderComponent.fileInput.nativeElement.value = "";
  }

  onLoadValue() {
    this.showModal = true;
    this.isNew = false;
    this.selectedRow.date = new Date(this.selectedRow.date);
    this.uploaderComponent.uploader.clearQueue();
    this.uploaderComponent.fileInput.nativeElement.value = "";
    this.image = this.selectedRow.image;
    this.eventForm.setValue(this.selectedRow);
  }

  onNew() {
    this.showModal = true;
    this.isNew = true;
    this.image = null;
    this.uploaderComponent.uploader.clearQueue();
    this.uploaderComponent.fileInput.nativeElement.value = "";
    this.eventForm.reset();
  }

  onSubmit() {
    let form = this.eventForm.value;
    form["image"] = this.image;
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
