import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../shared/project.service'
import {ActivatedRoute} from '@angular/router'
import {IProject} from '../shared/project.model'
@Component({
templateUrl: '/app/projects/project-details/project-details.component.html',
styles: [`
    .container {padding-left:20px; padding-right:20px;}
    .project-image {height: 200px;}
    `
]
})

export class ProjectDetailsComponent implements OnInit{
    project: IProject
constructor(private projectService: ProjectService, private route:ActivatedRoute){

}
    ngOnInit(){
        
this.project = this.projectService.getProject(+this.route.snapshot.params['id'])
    }
}