import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {BackendService} from "../../service/backend.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'flora-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit, OnDestroy {

  private volunteerForm: FormGroup;
  private subscription: Subscription = new Subscription();
  private volunteered: boolean = false;

  constructor(private backendService:BackendService, private formBuilder:FormBuilder) {

    this.volunteerForm = formBuilder.group({
      'email' : ['', Validators.required],
      'name' : ['', Validators.required],
      'phone' : ['', Validators.required]
    })

  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit(){
    this.subscription = this.backendService.saveVolunteer(this.volunteerForm.value).subscribe( data => this.volunteered = true );
  }

}
