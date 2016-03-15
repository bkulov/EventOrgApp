///<reference path="../../jspm_packages/npm/angular2@2.0.0-beta.9/core.d.ts"/>
///<reference path="../../jspm_packages/npm/angular2@2.0.0-beta.9/router.d.ts"/>

import {Component, OnInit, Input} from '../../jspm_packages/npm/angular2@2.0.0-beta.9/core';
import {Router} from '../../jspm_packages/npm/angular2@2.0.0-beta.9/router';

import {Lecture} from '../services/lecture';
import {LecturesService} from '../services/lectures.service';
import {Difficulty} from '../services/difficulty';

@Component({
	selector: 'lectures-list',
	templateUrl: '/source/templates/lectures.html',
	styleUrls: ['source/css/lectures.component.css']
})
export class LecturesListComponent implements OnInit {
	public dates: Date[] = [];
	@Input() title: string;
	@Input() showOnlyScheduled: boolean = false;

	constructor(private _lecturesService: LecturesService, private _router: Router) {
		var aa = 0;
	}

	ngOnInit() {
		this.dates = this._lecturesService.getDates();
	}

	toLocaleDateString(date: Date): string {
		return this._lecturesService.toLocaleDateString(date);
	}

	getLectorName(lectorId: number): string {
		return this._lecturesService.getLectorName(lectorId);
	}

	getLecturesByDate(date: Date): Lecture[] {
		return this.showOnlyScheduled ? this._lecturesService.getScheduledByDate(date)
									  : this._lecturesService.getAllByDate(date);
	}

	getDifficulty(difficulty: Difficulty): string {
		return this._lecturesService.getLectureDifficultyAsText(difficulty);
	}

	getDifficultyColor(difficulty: Difficulty): string {
		return this._lecturesService.getLectureDifficultyColor(difficulty);
	}

	gotoDetail(lecture: Lecture) {
        let link = ['LectureDetail', { id: lecture.id }];
        this._router.navigate(link);
	}

	setSchedule(lecture: Lecture, scheduled: boolean): void {
		this._lecturesService.setScheduled(lecture, scheduled);
	}
}
