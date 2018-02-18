import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from '../../../shared/models/models';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BlogService } from '../../../shared/services/blog/blog.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  @Input() news: IArticle;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getNews();
  }
  getNews(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getBlog(id)
      .subscribe(news => this.news = news);
    console.log(this.news);
  }
  goBack(): void {
    this.location.back();
  }
}
