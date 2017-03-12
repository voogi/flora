import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'flora-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {

  private visible:boolean = false;
  private selected:any;

  constructor() {

  }

  ngOnInit() {
  }

  onShow(item:any){
    this.selected = item;
    this.visible = true;
  }

  onHide(){
    this.visible = false;

  }


}
