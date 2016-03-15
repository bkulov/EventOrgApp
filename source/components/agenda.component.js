///<reference path="../../jspm_packages/npm/angular2@2.0.0-beta.9/core.d.ts"/>
///<reference path="../../jspm_packages/npm/angular2@2.0.0-beta.9/router.d.ts"/>
System.register(['../../jspm_packages/npm/angular2@2.0.0-beta.9/core', '../../jspm_packages/npm/angular2@2.0.0-beta.9/router', './lectures-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, lectures_list_component_1;
    var AgendaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (lectures_list_component_1_1) {
                lectures_list_component_1 = lectures_list_component_1_1;
            }],
        execute: function() {
            let AgendaComponent = class AgendaComponent {
                constructor(_router) {
                    this._router = _router;
                }
                onAddLectures() {
                    this._router.navigate(['Lectures']);
                }
                ngOnInit() {
                    var aa = 0;
                }
            };
            AgendaComponent = __decorate([
                core_1.Component({
                    selector: 'agenda',
                    templateUrl: '/source/templates/agenda.html',
                    directives: [lectures_list_component_1.LecturesListComponent]
                }), 
                __metadata('design:paramtypes', [router_1.Router])
            ], AgendaComponent);
            exports_1("AgendaComponent", AgendaComponent);
        }
    }
});
//# sourceMappingURL=agenda.component.js.map