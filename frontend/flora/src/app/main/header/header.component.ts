import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'flora-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private newsletterForm: FormGroup;
  private visible: boolean = false;
  private subscribed: boolean = false;


  constructor(private router:Router,private backendService:BackendService, private formBuilder:FormBuilder) {

    this.newsletterForm = formBuilder.group({
      'email' : ['', [Validators.required,Validators.email]]
    })

  }

  onToggleSubPopup(){
    this.visible = !this.visible;
  }

  ngOnInit() {
  }

  onSubscribe(){
    this.backendService.subscribe(this.newsletterForm.value).subscribe( data => this.subscribed = true );
  }

  onNavigateToHome(){
    this.router.navigate(['/']);
  }


}
