import { Component, OnInit } from '@angular/core';
import { IArticle } from '../../../shared/models/models';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article: IArticle;
  constructor() { }

  ngOnInit() {

  }

}
