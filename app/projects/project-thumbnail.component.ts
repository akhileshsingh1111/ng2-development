import {Component, Input, Output, EventEmitter} from '@angular/core'


@Component({
    selector:'project-thumbnail',
    template: `
    <div [routerLink] ="['/projects', project?.id]" class="well hoverwell thumbnail">
    <h2>{{project?.name}}</h2>
    <div>Date : {{project?.date}}</div>
    <div [ngClass]="getStartTimeClass()" [ngSwitch]="project?.time">
    Time : {{project?.time}}
    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
    <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{project?.price}}</div>
    <div *ngIf="project?.location">
    <span>Location : {{project?.location?.address}}</span>
    
    <span class="pad-left">{{project?.location?.city}}{{project?.location?.country}}</span>
    <button class="btn btn-primary" (click) = "handleClickMe()">!!Click ME </button>
    </div>
    </div>
    `,
    styles:[`
    .red {color: red !important;}
    .bold {font-weight: bold;}
    .pad-left {margin-left:10px}
    
    `]
})

export class ProjectThumbnailCompenent{
   @Input() project:any
   someProperty:any = "Project Name"
   @Output() projectClick = new EventEmitter()

   //handleClickMe(){
     //  this.projectClick.emit(this.project.name)
   //}
   logfoo(){
       console.log('foo')
   }

   getStartTimeClass(){
       if(this.project && this.project.time==='8:00 am')
        return ['red', 'bold']
       return []
   }
}