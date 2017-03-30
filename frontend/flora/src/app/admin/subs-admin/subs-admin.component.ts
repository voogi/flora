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
  public subs: Array<any>;

  constructor(private backendService:BackendService) { }

  ngOnInit() {
    this.loadNews();
  }

  ngOnDestroy() {
    this.subsSub.unsubscribe();
  }

  private loadNews() {
    this.subsSub = this.backendService.getALlSubscriber().subscribe(
      data => this.subs = data
    );
  }

}
