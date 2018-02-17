import { Injectable } from '@angular/core';
import { IArticle } from '../models/models';
import { ARTICLES } from '../mock/mock-article';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BlogService {

  constructor() { }

  getBlogs(): Observable<IArticle[]> {
    return of (ARTICLES.filter((blog) => {
      return blog.category === 'blog';
    }));
  }
  getBlog(id): IArticle {
    return ARTICLES.find(id);
  }
}
