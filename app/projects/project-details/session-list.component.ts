import { Component, Input } from '@angular/core'
import { ISession } from '../shared/project.model'

@Component({
selector: 'session-list',
templateUrl: 'app/projects/project-details/session-list.component.html'
})

export class SessionListComponent{
@Input() sessions : ISession[]
}