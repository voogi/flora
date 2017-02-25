import {Component, OnInit, Input, OnDestroy, EventEmitter, Output} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from "@angular/forms";
import {Headers, Response, Http} from "@angular/http";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'flora-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  private bURL: string = "http://localhost:8080";
  private headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  public showModal = false;
  private isNew = false;
  private newsForm: FormGroup;
  private saveSubscription: Subscription;
  @Input() public news: any;
  @Output() newsSaved: EventEmitter<string> = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder, private http: Http) {
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
    this.saveSubscription = this.saveNews().subscribe(
      data => {
        this.isNew = false;
        data.date = new Date(data.date);
        this.newsForm.setValue(data);
        return this.newsSaved.emit(data);
      }
    );
  }

  saveNews() {
    const body = JSON.stringify(this.newsForm.value);
    if (this.isNew) {
      return this.http.post(this.bURL + "/api/news", body, {headers: this.headers})
        .map((data: Response) => data.json())
        .catch(this.handleError);
    }

    return this.http.put(this.bURL + "/api/news", body, {headers: this.headers})
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error.json())
  }

}
