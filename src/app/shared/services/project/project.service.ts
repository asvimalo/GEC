import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Project } from './../../models/models';
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
export class ProjectService {

  private projectUrl = 'api/projects';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router
  ) { }

  getProjects(): Observable<Project[]> {

    return this.http.get<Project[]>(this.projectUrl)
      .pipe(
        tap(blogs => this.log('fetched projects')),
        catchError(this.handleError('getprojects', []))
      );

  }
  getProject(id): Observable<Project> {
    const url = `${this.projectUrl}/${id}`;
    this.messageService.add(`EventService: fetched event id=${id}`);
    return this.http.get<Project>(url).pipe(
      tap(_ => this.log(`fetched event id=${id}`)),
      catchError(this.handleError<Project>(`getEvent id=${id}`))
    );
  }
  searchProject(term: string): Observable<Project[]> {
    if (!term.trim()) {
      // if not search term, return empty blog array.
      return of([]);
    }
    return this.http.get<Project[]>(`api/event/?name=${term}`).pipe(
      tap(_ => this.log(`found event matching "${term}"`)),
      catchError(this.handleError<Project[]>('searchEvent', []))
    );
  }
  updateProject (event: Project): Observable<any> {

    this.messageService.add('EventService: Updated event');
    return this.http.put(this.projectUrl, event, httpOptions).pipe(
      tap(_ => this.log(`updated news id=${event.id}`)),
      catchError(this.handleError<any>('updateEvent'))
    );
  }
  AddProject(event: Project): Observable<Project> {

    return this.http.post<Project>(this.projectUrl, event, httpOptions).pipe(
      tap(_ => this.log(`added event w/ id=${event.id}`)),
      catchError(this.handleError<Project>('addEvent'))
    );
  }
  deleteProject (event: Project | number): Observable<Project> {
    const id = typeof event === 'number' ? event : event.id;
    const url = `${this.projectUrl}/${id}`;

    return this.http.delete<Project>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Project id=${id}`)),
      catchError(this.handleError<Project>('deleteProject'))
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
