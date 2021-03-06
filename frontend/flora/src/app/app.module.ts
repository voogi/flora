import { BrowserModule } from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
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
import {FileUploadModule} from "ng2-file-upload";
import { HeaderComponent } from './main/header/header.component';
import { ColleagueComponent } from './main/colleague/colleague.component';
import {TabsModule} from "ngx-tabs";
import {TruncatePipe} from "../pipes/truncate";
import { VolunteerComponent } from './main/volunteer/volunteer.component';
import { KnowledgeComponent } from './admin/knowledge/knowledge.component';
import { KnowledgeBaseComponent } from './main/knowledgeBase/knowledgeBase.component';
import {KSSwiperModule} from "angular2-swiper";
import {AdminColleagueComponent} from "./admin/colleague/colleague.component";
import { ContactComponent } from './main/contact/contact.component';
import { EventComponent } from './main/event/event.component';
import {AdminEventComponent} from "./admin/event/event.component";
import {CalendarModule} from "angular-calendar";
import {FroalaEditorModule,FroalaViewModule} from "angular2-froala-wysiwyg";
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { DonationComponent } from './main/donation/donation.component';
import { VolunAdminComponent } from './admin/volun-admin/volun-admin.component';
import { SubsAdminComponent } from './admin/subs-admin/subs-admin.component';
import {FilterPipe} from "../pipes/filter";
import { LoginComponent } from './login/login.component';
import {AuthGuardService} from "./login/auth-guard.service";
import {StickyModule} from 'ng2-sticky-kit/ng2-sticky-kit';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminColleagueComponent,
    AdminEventComponent,
    NewsComponent,
    SliderComponent,
    FooterComponent,
    UploaderComponent,
    HorizontalComponent,
    MainComponent,
    NewsComponent,
    HeaderComponent,
    TruncatePipe,
    FilterPipe,
    ColleagueComponent,
    VolunteerComponent,
    KnowledgeComponent,
    KnowledgeBaseComponent,
    ContactComponent,
    KnowledgeBaseComponent,
    EventComponent,
    DetailedViewComponent,
    VolunAdminComponent,
    DonationComponent,
    SubsAdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    ReactiveFormsModule,
    HttpModule,
    TabsModule,
    KSSwiperModule,
    FileUploadModule,
    BrowserAnimationsModule,
    StickyModule,
    DateValueAccessorModule,
    CalendarModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    appRouting

  ],
  providers: [ScrollService, BackendService, AuthGuardService, { provide: LOCALE_ID, useValue: "hu-HU" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
