import {Component, OnInit, Input} from 'angular2/core';
import {Router} from 'angular2/router';

import {Lecture} from './services/lecture';
import {LecturesService} from './services/lectures.service';
import {Difficulty} from './services/difficulty';

@Component({
	selector: 'lectures-list',
	templateUrl: './source/templates/lectures.html',
	styleUrls: ['source/css/lectures.component.css']
})
export class LecturesListComponent implements OnInit {
	public dates: Date[] = [];
	@Input() title: string;
	@Input() showOnlyScheduled: boolean = false;

	constructor(private _lecturesService: LecturesService, private _router: Router) { }

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

	gotoDetail(lecture: Lecture) {
        let link = ['LectureDetail', { id: lecture.id }];
        this._router.navigate(link);
	}
}
