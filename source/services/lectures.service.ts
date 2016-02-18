import {Injectable} from 'angular2/core';

import {Lecture} from './lecture';
import {LECTURESMOCK} from './lectures-mock';
import {SpeakersService} from './speakers.service';
import {Difficulty} from './difficulty';

@Injectable()
export class LecturesService {
	_lectures: Lecture[] = [];
	_dates: Date[];

	constructor(private _speakersService: SpeakersService) {
		this._getLectures().then(lectures => this._lectures = lectures);
	}

	_getLectures(): Promise<Lecture[]> {
		return Promise.resolve(LECTURESMOCK);
	}

	_isDatePresentInArray(date: Date): boolean {
		let _self = this;
		return this._dates.filter(function (d) {
			return _self.dateEquals(d, date);
		}).length > 0;
	}


	dateEquals(date1: Date, date2: Date): boolean {
		return date1.getDate() === date2.getDate() &&
			date1.getMonth() === date2.getMonth() &&
			date1.getFullYear() === date2.getFullYear();
	}

	toLocaleDateString(date : Date): string {
		var options = { day: 'numeric', month: 'short' };

		return date.toLocaleDateString("en-US", options);
	}

	getDates(): Date[] {
		if (this._dates === undefined) {
			this._dates = [];

			for (let lecture of this._lectures) {
				if (!this._isDatePresentInArray(lecture.startTime)) {
					this._dates.push(lecture.startTime);
				}
			}
		}

		return this._dates;
	}

	getAllByDate(date: Date): Lecture[] {
		var lecturesForDay: Lecture[] = [];

		for (var i = 0; i < this._lectures.length; i++) {
			if (this.dateEquals(this._lectures[i].startTime, date)) {
				lecturesForDay.push(this._lectures[i]);
			}
		}

		return lecturesForDay;
	}

	getScheduledByDate(date: Date): Lecture[] {
		var aa = this.getAllByDate(date);
		var bb = aa.filter(function (l) { return l.scheduled; });

		return bb;
		//return this.getAllByDate(date).filter(function (l) { return l.scheduled; });
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

	getLectorName(lectorId: number): string {
        var lector = this._speakersService.getSpeakerById(lectorId);

        return lector ? lector.name : '';
    }

	getLectureDifficultyAsText(difficulty: Difficulty): string {
		switch (difficulty) {
			case Difficulty.SoftSkills:
				return 'SOFT SKILLS';
			case Difficulty.FoodAndEntertainment:
				return 'FOOD & ENTERTAINMENT';
			case Difficulty.DevOps:
				return 'DEVOPS';
		}

		return '';
	}

	setScheduled(lecture: Lecture, scheduled: boolean) {
		if (lecture) {
			lecture.scheduled = scheduled;
		}
	}
}