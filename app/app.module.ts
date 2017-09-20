import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { MercerAppComponent } from './mercer-app.component'
import { ProjectsListComponent } from './projects/projects-list.component'
import { ProjectThumbnailCompenent } from './projects/project-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { ProjectService } from './projects/shared/project.service'
import { ToastrService } from './common/toastr.service'
import { CreateProjectComponent } from './projects/create-project.component'
import { ProjectDetailsComponent } from './projects/project-details/project-details.component'
import { CreateSessionComponent } from './projects/project-details/create-session.component'
import { SessionListComponent } from './projects/project-details/session-list.component'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [MercerAppComponent,
        ProjectsListComponent,
        ProjectThumbnailCompenent,
        NavBarComponent,
        ProjectDetailsComponent,
        CreateProjectComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent
    ],
    providers: [ProjectService, ToastrService,
        AuthService
    ],

    bootstrap: [MercerAppComponent]
})
export class AppModule { }