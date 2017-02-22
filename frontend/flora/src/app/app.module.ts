import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import {ScrollService} from "./service/scroll.service";
import { AdminComponent } from './admin/admin/admin.component';
import {appRouting} from "./app.routing";
import { HorizontalComponent } from './horizontal/horizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FooterComponent,
    SliderComponent,
    HorizontalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
