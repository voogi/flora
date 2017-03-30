import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {BackendService} from "../../service/backend.service";

@Component({
  selector: 'flora-volun-admin',
  templateUrl: './volun-admin.component.html',
  styleUrls: ['./volun-admin.component.css']
})
export class VolunAdminComponent implements OnInit, OnDestroy {

  public news: Array<any>;
  public sortBy = "name";
  private volunteersSub: Subscription;
  public volunteers: Array<any>;

  constructor(private backendSerrvice:BackendService) { }

  ngOnInit() {
    this.loadNews();
  }

  ngOnDestroy(){
    this.volunteersSub.unsubscribe();
  }

  private loadNews() {
    // this.volunteersSub = this.backendService.getAllV().subscribe(
    //   data => this.news = data
    // );
  }

}
