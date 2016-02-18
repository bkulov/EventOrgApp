System.register(['angular2/core', './services/lectures.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, lectures_service_1;
    var AgendaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lectures_service_1_1) {
                lectures_service_1 = lectures_service_1_1;
            }],
        execute: function() {
            AgendaComponent = (function () {
                function AgendaComponent(_lecturesService) {
                    this._lecturesService = _lecturesService;
                    this.title = 'Agenda';
                    this.dates = [];
                }
                AgendaComponent.prototype.ngOnInit = function () {
                    this.dates = this._lecturesService.getDates();
                    this._lectures = this._lecturesService.getAllByDate(this.dates[0]);
                };
                AgendaComponent.prototype.toLocaleDateString = function (date) {
                    return this._lecturesService.toLocaleDateString(date);
                };
                AgendaComponent.prototype.getScheduledLecturesByDate = function (date) {
                    return this._lecturesService.getScheduledByDate(date);
                };
                AgendaComponent.prototype.getLectorName = function (lectorId) {
                    return this._lecturesService.getLectorName(lectorId);
                };
                AgendaComponent.prototype.getDifficulty = function (difficulty) {
                    return this._lecturesService.getLectureDifficultyAsText(difficulty);
                };
                AgendaComponent = __decorate([
                    core_1.Component({
                        selector: 'agenda',
                        templateUrl: './source/templates/agenda.html',
                        styleUrls: ['source/css/agenda.component.css']
                    }), 
                    __metadata('design:paramtypes', [lectures_service_1.LecturesService])
                ], AgendaComponent);
                return AgendaComponent;
            })();
            exports_1("AgendaComponent", AgendaComponent);
        }
    }
});
//# sourceMappingURL=agenda.component.js.map