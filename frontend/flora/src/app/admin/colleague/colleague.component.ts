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
  private cv;
  public froalaOptions: Object = {
    imageUploadURL: environment.bUrl + "/api/file/image"
  };

  public colleagues: Array<any>;
  public sortBy = "name";
  public searchName = "";
  public searchColumn = "name";
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
      'cv': [''],
      'active': ['']
    });
  }

  ngOnInit() {
    this.loadColleagues();
  }

  ngOnDestroy(): void {

    if(this.saveSubscription){
      this.saveSubscription.unsubscribe();
    }

    if(this.colleagueSub){
      this.colleagueSub.unsubscribe();
    }

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
  onCVUploaded(fileName:string){
    this.cv = fileName;
  }
  getImage(){
    return environment.imagesUrl + this.image;
  }

  onDeleteImage(){
    this.image = null;
  }

  onDeleteCV(){
    this.cv = null;
  }

  onLoadValue() {
    this.showModal = true;
    this.isNew = false;
    this.colleagueForm.setValue(this.selectedRow);
  }

  onNew() {
    this.showModal = true;
    this.isNew = true;
    this.colleagueForm.reset();
    this.colleagueForm.controls['description'].setValue("");
  }

  onSubmit() {
    let form = this.colleagueForm.value;
    const body = JSON.stringify(form);
    this.saveSubscription = this.backendService.saveColleague(body, this.isNew).subscribe(
      data => {
        this.isNew = false;
        this.colleagueForm.setValue(data);
        this.loadColleagues();
        this.selectedRow = null;
        this.showModal = !this.showModal;
      }
    );
  }

}
