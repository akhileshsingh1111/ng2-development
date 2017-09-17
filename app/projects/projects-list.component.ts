import { Component, OnInit } from '@angular/core'
import { ProjectService } from './shared/project.service'
import { ToastrService } from '../common/toastr.service'

@Component({
  selector: 'projects-list',
  template: `<div>
    <h2>Upcoming mercer projects</h2>
  <div class="row">
  <div *ngFor="let project of projects"  class="col-mod-5">
  <project-thumbnail (click)= "handleThumbnailClick(project.name)" [project]="project"></project-thumbnail>
  </div>
  </div>
</div>`
})

export class ProjectsListComponent implements OnInit {
  projects: any[]
  constructor(private projectService: ProjectService, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.projects = this.projectService.getPojects()
  }
  //handleClickedProject(data) {
  //  console.log("Received", data)
  // }
  handleThumbnailClick(projectName) {
    this.toastr.success(projectName)
  }
}