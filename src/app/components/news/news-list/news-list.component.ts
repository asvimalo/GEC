import { Component, OnInit } from '@angular/core';
import { IArticle } from '../../../shared/models/models';
import { NewsService } from '../../../shared/services/news/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news: IArticle[];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.getBlogs();
  }
  getBlogs(): void {
    // this.blogs = this.blogService.getBlogs();
    this.newsService.getNews()
      .subscribe(news => this.news = news);
  }

}
