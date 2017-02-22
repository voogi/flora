import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {AdminComponent} from "./admin/admin/admin.component";
const APP_ROUTES: Routes = [
  { path: '', component: AppComponent},
  { path: 'admin', component: AdminComponent}
];

export const appRouting = RouterModule.forRoot(APP_ROUTES);
