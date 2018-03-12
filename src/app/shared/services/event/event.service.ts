import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Event } from './../../models/models';
// import { ARTICLES } from './../../mock/mock-article';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './../message/message.service';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class EventService {

  private eventUrl = 'api/events';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router
  ) { }

  getEvents(): Observable<Event[]> {

    return this.http.get<Event[]>(this.eventUrl)
      .pipe(
        tap(blogs => this.log('fetched events')),
        catchError(this.handleError('getEvents', []))
      );

  }
  getEvent(id): Observable<Event> {
    const url = `${this.eventUrl}/${id}`;
    this.messageService.add(`EventService: fetched event id=${id}`);
    return this.http.get<Event>(url).pipe(
      tap(_ => this.log(`fetched event id=${id}`)),
      catchError(this.handleError<Event>(`getEvent id=${id}`))
    );
  }
  searchEvent(term: string): Observable<Event[]> {
    if (!term.trim()) {
      // if not search term, return empty blog array.
      return of([]);
    }
    return this.http.get<Event[]>(`api/event/?name=${term}`).pipe(
      tap(_ => this.log(`found event matching "${term}"`)),
      catchError(this.handleError<Event[]>('searchEvent', []))
    );
  }
  updateEvent (event: Event): Observable<any> {

    this.messageService.add('EventService: Updated event');
    return this.http.put(this.eventUrl, event, httpOptions).pipe(
      tap(_ => this.log(`updated news id=${event.id}`)),
      catchError(this.handleError<any>('updateEvent'))
    );
  }
  AddEvent(event: Event): Observable<Event> {

    return this.http.post<Event>(this.eventUrl, event, httpOptions).pipe(
      tap(_ => this.log(`added event w/ id=${event.id}`)),
      catchError(this.handleError<Event>('addEvent'))
    );
  }
  deleteEvent (event: Event | number): Observable<Event> {
    const id = typeof event === 'number' ? event : event.id;
    const url = `${this.eventUrl}/${id}`;

    return this.http.delete<Event>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted event id=${id}`)),
      catchError(this.handleError<Event>('deleteNews'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add('EventService: ' + message);
  }
}
