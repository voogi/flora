import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {BackendService} from "../../service/backend.service";

@Component({
  selector: 'flora-volun-admin',
  templateUrl: './volun-admin.component.html'
})
export class VolunAdminComponent implements OnInit, OnDestroy {

  public sortBy = "name";
  private volunteersSub: Subscription;
  public volunteers: Array<any>;
  private selectedRow: any;

  constructor(private backendService:BackendService) { }

  ngOnInit() {
    this.loadNews();
  }

  ngOnDestroy(){
    this.volunteersSub.unsubscribe();
    this.selectedRow = null;
  }

  private loadNews() {
    this.volunteersSub = this.backendService.getAllVolunteer().subscribe(
      data => this.volunteers = data
    );
  }

}
