"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var project_service_1 = require("./shared/project.service");
var toastr_service_1 = require("../common/toastr.service");
var ProjectsListComponent = (function () {
    function ProjectsListComponent(projectService, toastr) {
        this.projectService = projectService;
        this.toastr = toastr;
    }
    ProjectsListComponent.prototype.ngOnInit = function () {
        this.projects = this.projectService.getPojects();
    };
    //handleClickedProject(data) {
    //  console.log("Received", data)
    // }
    ProjectsListComponent.prototype.handleThumbnailClick = function (projectName) {
        this.toastr.success(projectName);
    };
    return ProjectsListComponent;
}());
ProjectsListComponent = __decorate([
    core_1.Component({
        selector: 'projects-list',
        template: "<div>\n    <h2>Upcoming mercer projects</h2>\n  <div class=\"row\">\n  <div *ngFor=\"let project of projects\"  class=\"col-mod-5\">\n  <project-thumbnail (click)= \"handleThumbnailClick(project.name)\" [project]=\"project\"></project-thumbnail>\n  </div>\n  </div>\n</div>"
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService, toastr_service_1.ToastrService])
], ProjectsListComponent);
exports.ProjectsListComponent = ProjectsListComponent;
//# sourceMappingURL=projects-list.component.js.map