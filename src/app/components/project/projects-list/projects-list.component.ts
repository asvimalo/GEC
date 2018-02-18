import { Component, OnInit } from '@angular/core';
import { Project } from '../../../shared/models/models';
import { ProjectService } from '../../../shared/services/project/project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: Project[];

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.getBlogs();
  }
  getBlogs(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

}
