import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Subscription} from "rxjs";

@Component({
  selector: 'flora-knowledge-base',
  templateUrl: 'knowledgeBase.component.html',
  styleUrls: ['knowledgeBase.component.css']
})
export class KnowledgeBaseComponent implements OnInit {

  private knowledges: Array<any> = [];
  private getKnowledgeBaseSub: Subscription;
  private selected: any;

  constructor(private backendService: BackendService, sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.getKnowledgeBaseSub = this.backendService.getKnowledges().subscribe(
      data => {
        this.knowledges = data;
        this.selected = data[0] || {};
      }
    );
  }

  onKnowledgeSelected(item: any) {
    this.selected = item;
  }

}
