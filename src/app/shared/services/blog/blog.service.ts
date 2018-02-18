import { Injectable } from '@angular/core';
import { IArticle } from './../../models/models';
import { ARTICLES } from './../../mock/mock-article';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './../message/message.service';

@Injectable()
export class BlogService {

  constructor(
    private messageService: MessageService
  ) { }

  getBlogs(): Observable<IArticle[]> {
    return of (ARTICLES.filter((blog) => {
      this.messageService.add('BlogService: fetched blogs');
      return blog.category === 'blog';
    }));
  }
  getBlog(id): Observable<IArticle> {
    this.messageService.add(`BlogService: fetched blog id=${id}`);
    return of(ARTICLES.find(blog => blog.id === id));
  }
}
