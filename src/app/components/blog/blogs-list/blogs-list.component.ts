import { Component, OnInit } from '@angular/core';
import { MaterialModule } from './../../../shared/material/material.module';
import { IArticle } from './../../../shared/models/models';
import { BlogService } from './../../../shared/services/blog.service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {
  blogs: IArticle[];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.getBlogs();
  }
  getBlogs(): void {
    // this.blogs = this.blogService.getBlogs();
    this.blogService.getBlogs()
      .subscribe(blogs => this.blogs = blogs);
  }
}
