import {OnInit} from 'angular2/core';

import {Lecture} from './lecture';
import {LecturesMock} from './lectures-mock';

export class LecturesService implements OnInit {
	_lectures: Lecture[];

	ngOnInit() {
		this._lectures = LecturesMock;
	}

	_dateEquals(date1: Date, date2: Date): boolean {
		return date1.getDate() === date2.getDate() &&
			date1.getMonth() === date2.getMonth() &&
			date1.getFullYear() === date2.getFullYear();
	}

	toLocaleDateString(date : Date): string {
		var options = { day: 'numeric', month: 'short' };

		return date.toLocaleDateString("en-US", options);
	}

	getDates(): Date[] {
		var dates: Date[] = [];

		var isDatePresentInArray = function (date) {
			return dates.filter(function (d) { return this._dateEquals(d, date); }).length > 0;
		}

		for (var lecture of this._lectures) {
			if (!isDatePresentInArray(lecture.startTime)) {
				dates.push(lecture.startTime);
			}
		}

		return dates;
	}

	getAllByDate(date: Date): Lecture[] {
		var lecturesForDay: Lecture[] = [];

		for (var i = 0; i < this._lectures.length; i++) {
			if (this._dateEquals(this._lectures[i].startTime, date)) {
				lecturesForDay.push(this._lectures[i]);
			}
		}

		return lecturesForDay;
	}

	get(lectureId: number): Lecture {
		for (var i = 0; i < this._lectures.length; i++) {
			if (this._lectures[i].id === lectureId) {
				return this._lectures[i];
			}
		}

		return null;
	}

	allBySpeaker(speakerId: number): Lecture[] {
		var lecturesBySpeaker: Lecture[] = [];

		for (var i = 0; i < this._lectures.length; i++) {
			if (this._lectures[i].lectorId === speakerId) {
				lecturesBySpeaker.push(this._lectures[i]);
			}
		}

		return lecturesBySpeaker;
	}

	setScheduled(lecture: Lecture, scheduled: boolean) {
		if (lecture) {
			lecture.scheduled = scheduled;
		}
	}
}