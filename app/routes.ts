import { Routes } from '@angular/router'
import { ProjectsListComponent } from './projects/projects-list.component'
import { ProjectDetailsComponent } from './projects/project-details/project-details.component'
import { CreateSessionComponent } from './projects/project-details/create-session.component'
import { CreateProjectComponent } from './projects/create-project.component'
import { Error404Component } from './errors/404.component'
export const appRoutes: Routes = [
    { path: 'projects/new', component: CreateProjectComponent },
    { path: 'projects', component: ProjectsListComponent },
    { path: 'projects/:id', component: ProjectDetailsComponent },
    { path: 'projects/session/new', component: CreateSessionComponent },
    { path: '', redirectTo: '/projects', pathMatch: 'full' },
    { path: '404', component: Error404Component },
    { path:'user',  loadChildren:'app/user/user.module#UserModule'},
]