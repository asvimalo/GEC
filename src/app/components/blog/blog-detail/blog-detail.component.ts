import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MaterialModule } from './../../../shared/material/material.module';
import { BlogService } from './../../../shared/services/blog/blog.service';
import { IArticle } from '../../../shared/models/models';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  @Input() blog: IArticle;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBlog();
  }
  getBlog(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getBlog(id)
      .subscribe(blog => this.blog = blog);
    console.log(this.blog);
  }
  goBack(): void {
    this.location.back();
  }
}
