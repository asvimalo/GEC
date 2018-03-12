import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/mock/in-memory-data.service';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogAddComponent } from './components/blog/blog-add/blog-add.component';
import { BlogDetailComponent } from './components/blog/blog-detail/blog-detail.component';
import { BlogEditComponent } from './components/blog/blog-edit/blog-edit.component';
import { BlogsListComponent } from './components/blog/blogs-list/blogs-list.component';
import { EventDetailComponent } from './components/event/event-detail/event-detail.component';
import { EventsListComponent } from './components/event/events-list/events-list.component';
import { MainComponent } from './components/main/main.component';
import { MessageComponent } from './components/message/message.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsDetailComponent } from './components/news/news-detail/news-detail.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';

import { AppRoutingModule } from './/app-routing.module';

import { BlogService } from './shared/services/blog/blog.service';
import { NewsService } from './shared/services/news/news.service';
import { MessageService } from './shared/services/message/message.service';
import { EventService } from './shared/services/event/event.service';
import { ProjectService } from './shared/services/project/project.service';
import { ProjectDetailComponent } from './components/project/project-detail/project-detail.component';
import { ProjectsListComponent } from './components/project/projects-list/projects-list.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthService } from './shared/services/auth/auth.service';
import { RegisterComponent } from './components/auth/register/register.component';






@NgModule({
  declarations: [
    AppComponent,
    BlogAddComponent,
    BlogDetailComponent,
    BlogEditComponent,
    BlogsListComponent,
    EventDetailComponent,
    EventsListComponent,
    MainComponent,
    MessageComponent,
    NavbarComponent,
    NewsDetailComponent,
    NewsListComponent,
    ProjectDetailComponent,
    ProjectsListComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    BlogService,
    NewsService,
    MessageService,
    EventService,
    ProjectService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
