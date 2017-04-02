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
  private eventsForSelectedDate: Array<any> = [];
  private getEventsSubscription:Subscription;
  private swiperOptions: any;

  constructor(private backendService:BackendService) {
    this.swiperOptions = {
      pagination: '.swiper-pagination',
      paginationClickable: true
    };
  }

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
      }
    );
  }

  public dayClicked(day: CalendarMonthViewDay): void {
    if (this.selectedDay) {
      delete this.selectedDay.cssClass;
    }
    day.cssClass = 'cal-day-selected';
    this.selectedDay = day;
    this.eventsForSelectedDate = [];
    for (let i in this.events) {
      let event = this.events[i];
      let eventDate = new Date(event.date);
      if (eventDate.getFullYear() == day.date.getFullYear()
        && eventDate.getMonth() == day.date.getMonth()
        && eventDate.getDate() == day.date.getDate()) {
        this.eventsForSelectedDate.push(event);
      }
    }
  }

  ngOnDestroy(){
    this.getEventsSubscription.unsubscribe();
  }

}
