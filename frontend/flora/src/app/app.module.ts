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
import { NewsComponent } from './admin/news/news.component';
import {DateValueAccessorModule} from "angular-date-value-accessor";
import {BackendService} from "./service/backend.service";
import { UploaderComponent } from './admin/uploader/uploader.component';
import {FileSelectDirective} from "ng2-file-upload";
import { HeaderComponent } from './main/header/header.component';
import { ColleagueComponent } from './main/colleague/colleague.component';
import {TabsModule} from "ngx-tabs";
import {TruncatePipe} from "../pipes/truncate";
import { VolunteerComponent } from './main/volunteer/volunteer.component';
import { KnowledgeComponent } from './admin/knowledge/knowledge.component';
import { KnowledgeBaseComponent } from './main/knowledgeBase/knowledgeBase.component';
import {KSSwiperModule} from "angular2-swiper";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NewsComponent,
    FooterComponent,
    SliderComponent,
    HorizontalComponent,
    UploaderComponent,
    MainComponent,
    NewsComponent,
    HeaderComponent,
    FileSelectDirective,
    TruncatePipe,
    ColleagueComponent,
    VolunteerComponent,
    KnowledgeComponent,
    KnowledgeBaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    ReactiveFormsModule,
    TabsModule,
    DateValueAccessorModule,
    KSSwiperModule,
    appRouting
  ],
  providers: [ScrollService, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
