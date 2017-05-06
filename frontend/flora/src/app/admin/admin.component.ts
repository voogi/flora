import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'flora-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})
export class AdminComponent implements OnInit {

  private activeTab: any;

  constructor(private router:Router) {
  }

  ngOnInit() {

  }

  onNavigateToHome(){
    this.router.navigate(['../']);
  }


}
