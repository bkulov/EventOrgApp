///<reference path="../../jspm_packages/npm/angular2@2.0.0-beta.9/core.d.ts"/>
///<reference path="../../jspm_packages/npm/angular2@2.0.0-beta.9/router.d.ts"/>
System.register(['../../jspm_packages/npm/angular2@2.0.0-beta.9/core', '../../jspm_packages/npm/angular2@2.0.0-beta.9/router', '../services/lectures.service'], function(exports_1, context_1) {
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
    var core_1, router_1, lectures_service_1;
    var LecturesListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (lectures_service_1_1) {
                lectures_service_1 = lectures_service_1_1;
            }],
        execute: function() {
            let LecturesListComponent = class LecturesListComponent {
                constructor(_lecturesService, _router) {
                    this._lecturesService = _lecturesService;
                    this._router = _router;
                    this.dates = [];
                    this.showOnlyScheduled = false;
                    var aa = 0;
                }
                ngOnInit() {
                    this.dates = this._lecturesService.getDates();
                }
                toLocaleDateString(date) {
                    return this._lecturesService.toLocaleDateString(date);
                }
                getLectorName(lectorId) {
                    return this._lecturesService.getLectorName(lectorId);
                }
                getLecturesByDate(date) {
                    return this.showOnlyScheduled ? this._lecturesService.getScheduledByDate(date)
                        : this._lecturesService.getAllByDate(date);
                }
                getDifficulty(difficulty) {
                    return this._lecturesService.getLectureDifficultyAsText(difficulty);
                }
                getDifficultyColor(difficulty) {
                    return this._lecturesService.getLectureDifficultyColor(difficulty);
                }
                gotoDetail(lecture) {
                    let link = ['LectureDetail', { id: lecture.id }];
                    this._router.navigate(link);
                }
                setSchedule(lecture, scheduled) {
                    this._lecturesService.setScheduled(lecture, scheduled);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], LecturesListComponent.prototype, "title", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Boolean)
            ], LecturesListComponent.prototype, "showOnlyScheduled", void 0);
            LecturesListComponent = __decorate([
                core_1.Component({
                    selector: 'lectures-list',
                    templateUrl: '/source/templates/lectures.html',
                    styleUrls: ['source/css/lectures.component.css']
                }), 
                __metadata('design:paramtypes', [lectures_service_1.LecturesService, router_1.Router])
            ], LecturesListComponent);
            exports_1("LecturesListComponent", LecturesListComponent);
        }
    }
});
//# sourceMappingURL=lectures-list.component.js.map