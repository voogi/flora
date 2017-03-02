import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {CalendarEvent, CalendarMonthViewDay} from 'angular-calendar';
import {BackendService} from "../../service/backend.service";
declare var Swiper;

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  }
};

@Component({
  selector: 'flora-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, OnDestroy {

  view: string = 'month';
  viewDate: Date = new Date();
  locale = "hu";
  calEvents: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();
  selectedDay: CalendarMonthViewDay;

  private events: Array<any> = [];
  private getEventsSubscription:Subscription;

  constructor(private backendService:BackendService) { }

  ngOnInit() {
    this.getEventsSubscription = this.backendService.getEvents().subscribe(
      data => {

        this.events = data;
        data.forEach(event => {
          this.calEvents.push({
            start: new Date(event.date),
            title: event.title,
            color: colors.red,
            allDay: true
          });
        });

        this.refresh.next();
        setTimeout(function(){
          this.initSwiper();
        }.bind(this),0);

      }
    );
  }

  public dayClicked(day: CalendarMonthViewDay): void {
    if (this.selectedDay) {
      delete this.selectedDay.cssClass;
    }
    day.cssClass = 'cal-day-selected';
    this.selectedDay = day;
  }

  ngOnDestroy(){
    this.getEventsSubscription.unsubscribe();
  }

  public initSwiper(){
    var swiper = new Swiper('.colleague-swiper', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'/*,
       spaceBetween: 30*/
    });
  }

}
