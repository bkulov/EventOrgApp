System.register(['angular2/core', 'angular2/router', './services/lectures.service'], function(exports_1) {
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
    var LectureDetailComponent;
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
            LectureDetailComponent = (function () {
                function LectureDetailComponent(_lecturesService, _routeParams, _router) {
                    this._lecturesService = _lecturesService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                }
                LectureDetailComponent.prototype.ngOnInit = function () {
                    var id = +this._routeParams.get('id');
                    this.lecture = this._lecturesService.get(id);
                };
                LectureDetailComponent.prototype.getDifficulty = function () {
                    return this._lecturesService.getLectureDifficultyAsText(this.lecture.difficulty);
                };
                LectureDetailComponent.prototype.getLectorName = function () {
                    return this._lecturesService.getLectorName(this.lecture.lectorId);
                };
                LectureDetailComponent.prototype.toLocaleDateString = function (date) {
                    return this._lecturesService.toLocaleDateString(date);
                };
                LectureDetailComponent.prototype.setSchedule = function (scheduled) {
                    this._lecturesService.setScheduled(this.lecture, scheduled);
                };
                LectureDetailComponent.prototype.setRating = function (rating) {
                    this.lecture.rating = rating;
                };
                LectureDetailComponent.prototype.gotoSpeaker = function () {
                    var link = ['SpeakerDetail', { id: this.lecture.lectorId }];
                    this._router.navigate(link);
                };
                LectureDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'lecture-detail',
                        templateUrl: './source/templates/lecture-detail.html'
                    }), 
                    __metadata('design:paramtypes', [lectures_service_1.LecturesService, router_1.RouteParams, router_1.Router])
                ], LectureDetailComponent);
                return LectureDetailComponent;
            })();
            exports_1("LectureDetailComponent", LectureDetailComponent);
        }
    }
});
//# sourceMappingURL=lecture-detail.component.js.map