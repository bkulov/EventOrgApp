System.register(['angular2/core', './lectures-mock', './speakers.service', './difficulty'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, lectures_mock_1, speakers_service_1, difficulty_1;
    var LecturesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lectures_mock_1_1) {
                lectures_mock_1 = lectures_mock_1_1;
            },
            function (speakers_service_1_1) {
                speakers_service_1 = speakers_service_1_1;
            },
            function (difficulty_1_1) {
                difficulty_1 = difficulty_1_1;
            }],
        execute: function() {
            LecturesService = (function () {
                function LecturesService(_speakersService) {
                    var _this = this;
                    this._speakersService = _speakersService;
                    this._lectures = [];
                    this._getLectures().then(function (lectures) { return _this._lectures = lectures; });
                }
                LecturesService.prototype._getLectures = function () {
                    return Promise.resolve(lectures_mock_1.LECTURESMOCK);
                };
                LecturesService.prototype._isDatePresentInArray = function (date) {
                    var _self = this;
                    return this._dates.filter(function (d) {
                        return _self.dateEquals(d, date);
                    }).length > 0;
                };
                LecturesService.prototype.dateEquals = function (date1, date2) {
                    return date1.getDate() === date2.getDate() &&
                        date1.getMonth() === date2.getMonth() &&
                        date1.getFullYear() === date2.getFullYear();
                };
                LecturesService.prototype.toLocaleDateString = function (date) {
                    var options = { day: 'numeric', month: 'short' };
                    return date.toLocaleDateString("en-US", options);
                };
                LecturesService.prototype.getDates = function () {
                    if (this._dates === undefined) {
                        this._dates = [];
                        for (var _i = 0, _a = this._lectures; _i < _a.length; _i++) {
                            var lecture = _a[_i];
                            if (!this._isDatePresentInArray(lecture.startTime)) {
                                this._dates.push(lecture.startTime);
                            }
                        }
                    }
                    return this._dates;
                };
                LecturesService.prototype.getAllByDate = function (date) {
                    var lecturesForDay = [];
                    for (var i = 0; i < this._lectures.length; i++) {
                        if (this.dateEquals(this._lectures[i].startTime, date)) {
                            lecturesForDay.push(this._lectures[i]);
                        }
                    }
                    return lecturesForDay;
                };
                LecturesService.prototype.getScheduledByDate = function (date) {
                    var aa = this.getAllByDate(date);
                    var bb = aa.filter(function (l) { return l.scheduled; });
                    return bb;
                    //return this.getAllByDate(date).filter(function (l) { return l.scheduled; });
                };
                LecturesService.prototype.get = function (lectureId) {
                    for (var i = 0; i < this._lectures.length; i++) {
                        if (this._lectures[i].id === lectureId) {
                            return this._lectures[i];
                        }
                    }
                    return null;
                };
                LecturesService.prototype.allBySpeaker = function (speakerId) {
                    var lecturesBySpeaker = [];
                    for (var i = 0; i < this._lectures.length; i++) {
                        if (this._lectures[i].lectorId === speakerId) {
                            lecturesBySpeaker.push(this._lectures[i]);
                        }
                    }
                    return lecturesBySpeaker;
                };
                LecturesService.prototype.getLectorName = function (lectorId) {
                    var lector = this._speakersService.getSpeakerById(lectorId);
                    return lector ? lector.name : '';
                };
                LecturesService.prototype.getLectureDifficultyAsText = function (difficulty) {
                    switch (difficulty) {
                        case difficulty_1.Difficulty.SoftSkills:
                            return 'SOFT SKILLS';
                        case difficulty_1.Difficulty.FoodAndEntertainment:
                            return 'FOOD & ENTERTAINMENT';
                        case difficulty_1.Difficulty.DevOps:
                            return 'DEVOPS';
                    }
                    return '';
                };
                LecturesService.prototype.setScheduled = function (lecture, scheduled) {
                    if (lecture) {
                        lecture.scheduled = scheduled;
                    }
                };
                LecturesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [speakers_service_1.SpeakersService])
                ], LecturesService);
                return LecturesService;
            })();
            exports_1("LecturesService", LecturesService);
        }
    }
});
//# sourceMappingURL=lectures.service.js.map