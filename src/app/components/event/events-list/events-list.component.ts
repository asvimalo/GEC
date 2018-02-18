import { Component, OnInit } from '@angular/core';
import { Event } from './../../../shared/models/models';
import { EventService } from '../../../shared/services/event/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: Event[];

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.getEvents();
  }
  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }

}
