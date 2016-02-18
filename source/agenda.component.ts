import {Component, OnInit} from 'angular2/core';

import {Lecture} from './services/lecture';
import {LecturesService} from './services/lectures.service';
import {Difficulty} from './services/difficulty';

@Component({
	selector: 'agenda',
	templateUrl: './source/templates/agenda.html',
	styleUrls: ['source/css/agenda.component.css']
})
export class AgendaComponent implements OnInit {
	public title: string = 'Agenda';
	public dates: Date[] = [];

	_lectures: Lecture[];

	constructor(private _lecturesService: LecturesService) { }

	ngOnInit() {
		this.dates = this._lecturesService.getDates();
		this._lectures = this._lecturesService.getAllByDate(this.dates[0]);
	}

	toLocaleDateString(date: Date): string {
		return this._lecturesService.toLocaleDateString(date);
	}

	getScheduledLecturesByDate(date: Date): Lecture[] {
		return this._lecturesService.getScheduledByDate(date);
	}

	getLectorName(lectorId: number): string {
		return this._lecturesService.getLectorName(lectorId);
	}

	getDifficulty(difficulty: Difficulty): string {
		return this._lecturesService.getLectureDifficultyAsText(difficulty);
	}
}