import { Component, OnInit } from '@angular/core';
import { IArticle } from '../shared/models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: IArticle = {
    id: 1,
    title: 'Global Warming',
    content: 'Planet Earth warming too much. Important castastrofes about to happen. Alert!'
  };

  constructor() { }

  ngOnInit() {

  }

}
