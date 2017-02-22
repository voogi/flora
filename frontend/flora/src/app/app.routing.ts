import {Routes, RouterModule} from "@angular/router";
import {AdminComponent} from "./admin/admin.component";
import {MainComponent} from "./main/main.component";
const APP_ROUTES: Routes = [
  { path: '', component: MainComponent},
  { path: 'admin', component: AdminComponent}
];

export const appRouting = RouterModule.forRoot(APP_ROUTES);
