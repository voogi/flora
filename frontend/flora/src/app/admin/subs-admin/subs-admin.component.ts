import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {BackendService} from "../../service/backend.service";

@Component({
  selector: 'flora-subs-admin',
  templateUrl: './subs-admin.component.html'
})
export class SubsAdminComponent implements OnInit,OnDestroy {

  public news: Array<any>;
  public sortBy = "email";
  private subsSub: Subscription;
  private emailSub: Subscription;
  public subs: Array<any>;
  public emails: string = "";
  private selectedRow: any;
  public showModal = false;

  constructor(private backendService:BackendService) { }

  ngOnInit() {
    this.loadNews();
  }

  ngOnDestroy() {
    this.subsSub.unsubscribe();
    this.emailSub.unsubscribe();
    this.selectedRow = null;
  }

  onAllEmails() {
    this.showModal = true;
    this.emailSub = this.backendService.getSubscriberEmails().subscribe(
      data => this.emails = data
    );
  }

  private loadNews() {
    this.subsSub = this.backendService.getALlSubscriber().subscribe(
      data => this.subs = data
    );
  }

}
