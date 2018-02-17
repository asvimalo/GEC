import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsListComponent } from './components/news/news-list/news-list.component';
import { BlogDetailComponent } from './components/blog/blog-detail/blog-detail.component';
import { NewsDetailComponent } from './components/news/news-detail/news-detail.component';
import { BlogsListComponent } from './components/blog/blogs-list/blogs-list.component';
import { MainComponent } from './components/main/main.component';
import { EventsListComponent } from './components/event/events-list/events-list.component';
import { EventDetailComponent } from './components/event/event-detail/event-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'gec', pathMatch: 'full' },
  { path: 'gec', component: MainComponent },
  { path: 'news', component: NewsListComponent },
  { path: 'news/:id', component: NewsDetailComponent },
  { path: 'blog', component: BlogsListComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'event', component: EventsListComponent },
  { path: 'event/:id', component: EventDetailComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
