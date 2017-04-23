import { Injectable } from '@angular/core';
import {BackendService} from "../service/backend.service";
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authService: BackendService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.isLoggedIn) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false
    }
  }

}
