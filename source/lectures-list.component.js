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
    var LecturesListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lectures_service_1_1) {
                lectures_service_1 = lectures_service_1_1;
            }],
        execute: function() {
            LecturesListComponent = (function () {
                function LecturesListComponent(_lecturesService) {
                    this._lecturesService = _lecturesService;
                    this.dates = [];
                    this.showOnlyScheduled = false;
                }
                LecturesListComponent.prototype.ngOnInit = function () {
                    this.dates = this._lecturesService.getDates();
                };
                LecturesListComponent.prototype.toLocaleDateString = function (date) {
                    return this._lecturesService.toLocaleDateString(date);
                };
                LecturesListComponent.prototype.getLectorName = function (lectorId) {
                    return this._lecturesService.getLectorName(lectorId);
                };
                LecturesListComponent.prototype.getLecturesByDate = function (date) {
                    return this.showOnlyScheduled ? this._lecturesService.getScheduledByDate(date)
                        : this._lecturesService.getAllByDate(date);
                };
                LecturesListComponent.prototype.getDifficulty = function (difficulty) {
                    return this._lecturesService.getLectureDifficultyAsText(difficulty);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], LecturesListComponent.prototype, "showOnlyScheduled", void 0);
                LecturesListComponent = __decorate([
                    core_1.Component({
                        selector: 'lectures-list',
                        templateUrl: './source/templates/lectures.html',
                        styleUrls: ['source/css/lectures.component.css']
                    }), 
                    __metadata('design:paramtypes', [lectures_service_1.LecturesService])
                ], LecturesListComponent);
                return LecturesListComponent;
            })();
            exports_1("LecturesListComponent", LecturesListComponent);
        }
    }
});
//# sourceMappingURL=lectures-list.component.js.map