import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BackendService} from "../service/backend.service";
import {User} from "./user";

@Component({
  selector: 'flora-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  model: User;
  constructor(private authService: BackendService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.model = new User();
  }

  onSubmit(): void {
    this.authService
      .login(this.model)
      .subscribe(isLoggedIn => {
        if (isLoggedIn) this.router.navigate(['/admin']);
      });
  }

}
