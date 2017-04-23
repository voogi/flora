import {Routes, RouterModule} from "@angular/router";
import {AdminComponent} from "./admin/admin.component";
import {MainComponent} from "./main/main.component";
import {AuthGuardService} from "./login/auth-guard.service";
import {LoginComponent} from "./login/login.component";
const APP_ROUTES: Routes = [
  { path: '', component: MainComponent},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path : 'admin',
    component : AdminComponent,
    canActivate: [AuthGuardService]
  }
];

export const appRouting = RouterModule.forRoot(APP_ROUTES);
