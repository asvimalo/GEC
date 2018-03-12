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
export class BlogService {

  private blogUrl = 'api/articles';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router
  ) { }

  getBlogs(): Observable<IArticle[]> {

    return this.http.get<IArticle[]>(this.blogUrl)
      .pipe(
        tap(blogs => this.log('fetched blogs')),
        catchError(this.handleError('getBlogs', []))
      );

  }
  getBlog(id): Observable<IArticle> {
    const url = `${this.blogUrl}/${id}`;
    this.messageService.add(`BlogService: fetched blog id=${id}`);
    return this.http.get<IArticle>(url).pipe(
      tap(_ => this.log(`fetched blog id=${id}`)),
      catchError(this.handleError<IArticle>(`getBlog id=${id}`))
    );
  }
  searchHeroes(term: string): Observable<IArticle[]> {
    if (!term.trim()) {
      // if not search term, return empty blog array.
      return of([]);
    }
    return this.http.get<IArticle[]>(`api/blog/?name=${term}`).pipe(
      tap(_ => this.log(`found blogs matching "${term}"`)),
      catchError(this.handleError<IArticle[]>('searchBlog', []))
    );
  }
  updateBlog (blog: IArticle): Observable<any> {

    this.messageService.add('BlogService: Updated blog');
    return this.http.put(this.blogUrl, blog, httpOptions).pipe(
      tap(_ => this.log(`updated blog id=${blog.id}`)),
      catchError(this.handleError<any>('updateBlog'))
    );
  }
  AddBlog(blog: IArticle): Observable<IArticle> {
    const url = `${this.blogUrl}/${blog}`;
    this.log('Adding test from add component');
    return this.http.post<IArticle>(url, blog, httpOptions).pipe(
      tap(_ => this.log(`added blog w/ id=${blog.id}`)),
      catchError(this.handleError<IArticle>('Error adding Blog'))
    );
  }
  deleteBlog (blog: IArticle | number): Observable<IArticle> {
    const id = typeof blog === 'number' ? blog : blog.id;
    const url = `${this.blogUrl}/${id}`;

    return this.http.delete<IArticle>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted blog id=${id}`)),
      catchError(this.handleError<IArticle>('deleteBlog'))
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
    this.messageService.add('BlogService: ' + message);
  }
}
