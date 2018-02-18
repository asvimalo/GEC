import { Injectable } from '@angular/core';
import { MessageService } from '../message/message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { EVENTS } from '../../mock/mock-article';
import { Event } from '../../models/models';


@Injectable()
export class EventService {

  constructor(
    private messageService: MessageService
  ) { }

  getEvents(): Observable<Event[]> {
    this.messageService.add('EventsService: fetched events');
    return of(EVENTS);
  }
  getEvent(id): Observable<Event> {
    this.messageService.add(`EventService: fetched event id=${id}`);
    return of(EVENTS.find(event => event.id === id));
  }

}
