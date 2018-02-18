import { Injectable } from '@angular/core';
import { IArticle } from './../../models/models';
import { ARTICLES } from './../../mock/mock-article';
import { MessageService } from '../message/message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class NewsService {

  constructor(
    private messageService: MessageService
  ) { }

  getNews(): Observable<IArticle[]> {
    return of (ARTICLES.filter((news) => {
      this.messageService.add('NewsService: fetched news');
      return news.category === 'news';
    }));
  }
  getNew(id): Observable<IArticle> {
    this.messageService.add(`NewsService: fetched news id=${id}`);
    return of(ARTICLES.find(news => news.id === id));
  }
}
