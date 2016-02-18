import {Injectable} from 'angular2/core';

import {Lecture} from './lecture';
import {LECTURESMOCK} from './lectures-mock';
import {SpeakersService} from './speakers.service';
import {Difficulty} from './difficulty';

@Injectable()
export class LecturesService {

	// cache
	_lectures: Lecture[] = [];
	_dates: Date[];
	_lecturesByDate: Map<string, Lecture[]> = new Map<string, Lecture[]>();
	_scheduledLecturesByDate: Map<string, Lecture[]> = new Map<string, Lecture[]>();
	_lecturesBySpeaker: Map<number, Lecture[]> = new Map<number, Lecture[]>();


	constructor(private _speakersService: SpeakersService) {
		this._getLectures().then(lectures => this._lectures = lectures);
	}

	_getLectures(): Promise<Lecture[]> {
		return Promise.resolve(LECTURESMOCK);
	}

	_isDatePresentInArray(date: Date): boolean {
		let _self = this;
		return this._dates.filter(function (d) {
			return _self._dateEquals(d, date);
		}).length > 0;
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
		var dateAsString = date.toLocaleDateString();
		var lecturesForDate = this._lecturesByDate.get(dateAsString);

		if (lecturesForDate === undefined) {
			lecturesForDate = [];

			for (var i = 0; i < this._lectures.length; i++) {
				if (this._dateEquals(this._lectures[i].startTime, date)) {
					lecturesForDate.push(this._lectures[i]);
				}
			}

			this._lecturesByDate.set(dateAsString, lecturesForDate);
		}

		return lecturesForDate;
	}

	getScheduledByDate(date: Date): Lecture[] {
		var dateAsString = date.toLocaleDateString();
		var lecturesForDate = this._lecturesByDate.get(dateAsString);

		if (lecturesForDate === undefined) {
			lecturesForDate = this.getAllByDate(date).filter(function (l) { return l.scheduled; });

			this._lecturesByDate.set(dateAsString, lecturesForDate);
		}

		return lecturesForDate;
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
		var lecturesBySpeaker = this._lecturesBySpeaker.get(speakerId);
		if (lecturesBySpeaker === undefined) {
			lecturesBySpeaker = [];

			for (var i = 0; i < this._lectures.length; i++) {
				if (this._lectures[i].lectorId === speakerId) {
					lecturesBySpeaker.push(this._lectures[i]);
				}
			}

			this._lecturesBySpeaker.set(speakerId, lecturesBySpeaker);
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