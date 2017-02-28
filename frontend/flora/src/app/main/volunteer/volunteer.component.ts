import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {BackendService} from "../../service/backend.service";

@Component({
  selector: 'flora-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  private volunteerForm: FormGroup;

  constructor(private backendService:BackendService, private formBuilder:FormBuilder) {

    this.volunteerForm = formBuilder.group({
      'email' : ['', Validators.required],
      'name' : ['', Validators.required],
      'phone' : ['', Validators.required]
    })

  }

  ngOnInit() {
  }

  onSubmit(){
    //TODO register volunteer
  }

}
