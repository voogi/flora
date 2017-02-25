import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './main/footer/footer.component';
import { SliderComponent } from './main/slider/slider.component';
import {ScrollService} from "./service/scroll.service";
import { AdminComponent } from './admin/admin.component';
import {appRouting} from "./app.routing";
import { HorizontalComponent } from './main/horizontal/horizontal.component';
import { MainComponent } from './main/main.component';
import {DataTableModule} from "angular2-datatable";
import { ModalComponent } from './admin/modal/modal/modal.component';
import {DateValueAccessorModule} from "angular-date-value-accessor";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ModalComponent,
    FooterComponent,
    SliderComponent,
    HorizontalComponent,
    MainComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    ReactiveFormsModule,
    DateValueAccessorModule,
    appRouting
  ],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
