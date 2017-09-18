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
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'
@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [MercerAppComponent,
        ProjectsListComponent,
        ProjectThumbnailCompenent,
        NavBarComponent,
        ProjectDetailsComponent,
        CreateProjectComponent,
        Error404Component],
    providers: [ProjectService, ToastrService,
        AuthService
    ],

    bootstrap: [MercerAppComponent]
})
export class AppModule { }