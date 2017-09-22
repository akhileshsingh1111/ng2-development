import { Component, OnInit } from '@angular/core'
import { ProjectService } from './shared/project.service'
import { IProject } from './shared/project.model'
@Component({
  selector: 'projects-list',
  template: `<div>
    <h2>Upcoming mercer projects</h2>
  <div class="row">
  <div *ngFor="let project of projects"  class="col-mod-5">
  <project-thumbnail [project]="project"></project-thumbnail>
  </div>
  </div>
</div>`
})

export class ProjectsListComponent implements OnInit {
  projects: IProject[]
  constructor(private projectService: ProjectService) {

  }

  ngOnInit() {
    this.projects = this.projectService.getPojects()
  }

}