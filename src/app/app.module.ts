import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';

import { AppComponent } from './app.component';
import { ArticleDetailComponent } from './components/article/article-detail/article-detail.component';
import { ArticlesListComponent } from './components/article/articles-list/articles-list.component';
import { BlogDetailComponent } from './components/blog/blog-detail/blog-detail.component';
import { BlogsListComponent } from './components/blog/blogs-list/blogs-list.component';
import { EventDetailComponent } from './components/event/event-detail/event-detail.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';

import { MainComponent } from './components/main/main.component';

import { NewsDetailComponent } from './components/news/news-detail/news-detail.component';

import { AppRoutingModule } from './/app-routing.module';
import { EventsListComponent } from './components/event/events-list/events-list.component';
import { BlogService } from './shared/services/blog.service';
import { NewsService } from './shared/services/news.service';


@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailComponent,
    ArticlesListComponent,
    BlogDetailComponent,
    MainComponent,
    NavbarComponent,
    NewsListComponent,
    BlogsListComponent,
    NewsDetailComponent,
    EventsListComponent,
    EventDetailComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [BlogService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
