import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IArticle } from './../../models/models';
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
export class NewsService {

  private newsUrl = 'api/articles';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router
  ) { }

  getNews(): Observable<IArticle[]> {

    return this.http.get<IArticle[]>(this.newsUrl)
      .pipe(
        tap(blogs => this.log('fetched news')),
        catchError(this.handleError('getNews', []))
      );

  }
  getNew(id): Observable<IArticle> {
    const url = `${this.newsUrl}/${id}`;
    this.messageService.add(`newsService: fetched news id=${id}`);
    return this.http.get<IArticle>(url).pipe(
      tap(_ => this.log(`fetched news id=${id}`)),
      catchError(this.handleError<IArticle>(`getNews id=${id}`))
    );
  }
  searchNews(term: string): Observable<IArticle[]> {
    if (!term.trim()) {
      // if not search term, return empty blog array.
      return of([]);
    }
    return this.http.get<IArticle[]>(`api/news/?name=${term}`).pipe(
      tap(_ => this.log(`found news matching "${term}"`)),
      catchError(this.handleError<IArticle[]>('searchNews', []))
    );
  }
  updateNews (news: IArticle): Observable<any> {

    this.messageService.add('NewsService: Updated news');
    return this.http.put(this.newsUrl, news, httpOptions).pipe(
      tap(_ => this.log(`updated news id=${news.id}`)),
      catchError(this.handleError<any>('updateNews'))
    );
  }
  AddNews(news: IArticle): Observable<IArticle> {

    return this.http.post<IArticle>(this.newsUrl, news, httpOptions).pipe(
      tap(_ => this.log(`added news w/ id=${news.id}`)),
      catchError(this.handleError<IArticle>('addNews'))
    );
  }
  deleteNews (news: IArticle | number): Observable<IArticle> {
    const id = typeof news === 'number' ? news : news.id;
    const url = `${this.newsUrl}/${id}`;

    return this.http.delete<IArticle>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted news id=${id}`)),
      catchError(this.handleError<IArticle>('deleteNews'))
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
    this.messageService.add('NewsService: ' + message);
  }
}
