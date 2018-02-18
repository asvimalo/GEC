import { Injectable } from '@angular/core';
import { MessageService } from '../message/message.service';
import { Observable } from 'rxjs/Observable';
import { Project } from '../../models/models';
import { of } from 'rxjs/observable/of';
import { PROJECTS } from '../../mock/mock-article';

@Injectable()
export class ProjectService {

  constructor(
    private messageService: MessageService
  ) { }

  getProjects(): Observable<Project[]> {
    this.messageService.add('ProjectService: fetched projects');
    return of (PROJECTS);
  }
  getProject(id): Observable<Project> {
    this.messageService.add(`ProjectService: fetched project id=${id}`);
    return of(PROJECTS.find(project => project.id === id));
  }

}
