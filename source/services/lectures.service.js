System.register(['./lectures-mock'], function(exports_1) {
    var lectures_mock_1;
    var LecturesService;
    return {
        setters:[
            function (lectures_mock_1_1) {
                lectures_mock_1 = lectures_mock_1_1;
            }],
        execute: function() {
            LecturesService = (function () {
                function LecturesService() {
                }
                LecturesService.prototype.ngOnInit = function () {
                    this._lectures = lectures_mock_1.LecturesMock;
                };
                LecturesService.prototype._dateEquals = function (date1, date2) {
                    return date1.getDate() === date2.getDate() &&
                        date1.getMonth() === date2.getMonth() &&
                        date1.getFullYear() === date2.getFullYear();
                };
                LecturesService.prototype.toLocaleDateString = function (date) {
                    var options = { day: 'numeric', month: 'short' };
                    return date.toLocaleDateString("en-US", options);
                };
                LecturesService.prototype.getDates = function () {
                    var dates = [];
                    var isDatePresentInArray = function (date) {
                        return dates.filter(function (d) { return this._dateEquals(d, date); }).length > 0;
                    };
                    for (var _i = 0, _a = this._lectures; _i < _a.length; _i++) {
                        var lecture = _a[_i];
                        if (!isDatePresentInArray(lecture.startTime)) {
                            dates.push(lecture.startTime);
                        }
                    }
                    return dates;
                };
                LecturesService.prototype.getAllByDate = function (date) {
                    var lecturesForDay = [];
                    for (var i = 0; i < this._lectures.length; i++) {
                        if (this._dateEquals(this._lectures[i].startTime, date)) {
                            lecturesForDay.push(this._lectures[i]);
                        }
                    }
                    return lecturesForDay;
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
                LecturesService.prototype.setScheduled = function (lecture, scheduled) {
                    if (lecture) {
                        lecture.scheduled = scheduled;
                    }
                };
                return LecturesService;
            })();
            exports_1("LecturesService", LecturesService);
        }
    }
});
//# sourceMappingURL=lectures.service.js.map