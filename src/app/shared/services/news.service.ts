import { Injectable } from '@angular/core';
import { IArticle } from '../models/models';
import { ARTICLES } from '../mock/mock-article';

@Injectable()
export class NewsService {

  constructor() { }

  getNews(): IArticle[] {
    return ARTICLES.filter((blog) => {
      return blog.category === 'news';
    });
  }
  getNew(id): IArticle {
    return ARTICLES.find(id);
  }
}
