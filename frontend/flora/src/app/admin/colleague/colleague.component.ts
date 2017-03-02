import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Subscription} from "rxjs";
import {UploaderComponent} from "../uploader/uploader.component";
import {BackendService} from "../../service/backend.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'flora-admin-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.css']
})
export class AdminColleagueComponent implements OnInit, OnDestroy {

  public showModal = false;
  private isNew = false;
  private colleagueForm: FormGroup;
  private saveSubscription: Subscription;
  private image;
  @ViewChild(UploaderComponent) uploaderComponent: UploaderComponent;

  public colleagues: Array<any>;
  public sortBy = "name";
  private colleagueSub: Subscription;
  private selectedRow: any;

  constructor(private formBuilder: FormBuilder, private backendService:BackendService) {
    this.colleagueForm = formBuilder.group({
      'id': [''],
      'name': ['', Validators.required],
      'description': [''],
      'phone': [''],
      'email': [''],
      'image': [''],
      'active': ['']
    });
  }

  ngOnInit() {
    this.loadColleagues();
  }

  ngOnDestroy(): void {
    this.saveSubscription.unsubscribe();
    this.colleagueSub.unsubscribe();
  }


  onDelete(){
    this.backendService.deleteColleague(this.selectedRow["id"]).subscribe(
      (resp) => {this.loadColleagues(); this.selectedRow = null}
    );
  }

  private loadColleagues() {
    this.colleagueSub = this.backendService.getColleagues().subscribe(
      data => this.colleagues = data
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
    this.uploaderComponent.uploader.clearQueue();
    this.uploaderComponent.fileInput.nativeElement.value = "";
    this.image = this.selectedRow.image;
    this.colleagueForm.setValue(this.selectedRow);
  }

  onNew() {
    this.showModal = true;
    this.isNew = true;
    this.image = null;
    this.uploaderComponent.uploader.clearQueue();
    this.uploaderComponent.fileInput.nativeElement.value = "";
    this.colleagueForm.reset();
  }

  onSubmit() {
    let form = this.colleagueForm.value;
    form["image"] = this.image;
    const body = JSON.stringify(form);
    this.saveSubscription = this.backendService.saveColleague(body, this.isNew).subscribe(
      data => {
        this.isNew = false;
        this.colleagueForm.setValue(data);
        this.loadColleagues();
        this.selectedRow = null;
      }
    );
  }

}
