import {Component, OnInit, Input, OnDestroy, EventEmitter, Output} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from "@angular/forms";
import {Headers, Response, Http} from "@angular/http";
import {Observable, Subscription} from "rxjs";
import {BackendService} from "../../../service/backend.service";

@Component({
  selector: 'flora-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  public showModal = false;
  private isNew = false;
  private newsForm: FormGroup;
  private saveSubscription: Subscription;
  @Input() public news: any;
  @Output() newsSaved: EventEmitter<string> = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder, private backendService:BackendService) {
    this.newsForm = formBuilder.group({
      'id': [''],
      'title': ['', Validators.required],
      'shortDescription': [''],
      'description': [''],
      'date': [''],
      'active': ['']
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.saveSubscription.unsubscribe();
  }


  onLoadValue() {
    this.showModal = true;
    this.isNew = false;
    this.news.date = new Date(this.news.date);
    this.newsForm.setValue(this.news);
  }

  onNew() {
    this.showModal = true;
    this.isNew = true;
    this.newsForm.reset();
  }

  onSubmit() {
    const body = JSON.stringify(this.newsForm.value);
    this.saveSubscription = this.backendService.saveNews(body, this.isNew).subscribe(
      data => {
        this.isNew = false;
        data.date = new Date(data.date);
        this.newsForm.setValue(data);
        return this.newsSaved.emit(data);
      }
    );
  }

}
