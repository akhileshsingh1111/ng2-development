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
var router_1 = require("@angular/router");
var CreateProjectComponent = (function () {
    function CreateProjectComponent(router) {
        this.router = router;
    }
    CreateProjectComponent.prototype.cancel = function () {
        this.router.navigate(['/projects']);
    };
    return CreateProjectComponent;
}());
CreateProjectComponent = __decorate([
    core_1.Component({
        template: "\n        <h1>Create New Project</h1>\n    <hr>\n    <div class=\"col-md-6\">\n    <h3>[Create Event Form up here]</h3>\n    <br/>\n    <br/>\n    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n    <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-default\">Cancel</button>\n    </div>\n\n    "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], CreateProjectComponent);
exports.CreateProjectComponent = CreateProjectComponent;
//# sourceMappingURL=create-project.component.js.map