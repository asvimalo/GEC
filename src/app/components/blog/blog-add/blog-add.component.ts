import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogService } from './../../../shared/services/blog/blog.service';
import { MessageService } from './../../../shared/services/message/message.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {

  form: FormGroup;
  formSubmitAttempt: boolean;
  constructor(
    private messageService: MessageService,
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
    title: ['', Validators.required],
    subtitle: ['', Validators.required],
    description: ['', Validators.required],
    imageUrl: ['', Validators.required],
    content: ['', Validators.required],
    // dateCreated: ['', Validators.required],
    // dateModified: ['', Validators.required], // Date
    // isArquived: ['', Validators.required], // Date
    // comments: ['', Validators.required], // comments => Comment[]
    category: ['', Validators.required],
    // publisher: ['', Validators.required], // user[]
    });
  }
  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid) && this.form.get(field).touched ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  onSubmit() {
    if (this.form.valid) {
      this.messageService.add('Blogg-add-component');
      this.blogService.AddBlog(this.form.value);
      // this.router.navigate(['/blog']);
    }
    this.formSubmitAttempt = true;
  }
}



