import {Component, OnInit} from '../../jspm_packages/npm/angular2@2.0.0-beta.9/core';
import {RouteParams, Router} from '../../jspm_packages/npm/angular2@2.0.0-beta.9/router';

import {Lecture} from '../services/lecture';
import {LecturesService} from '../services/lectures.service';

@Component({
	selector: 'lecture-detail',
	templateUrl: '/source/templates/lecture-detail.html',
	styleUrls: ['source/css/lectures.component.css']
})
export class LectureDetailComponent implements OnInit {
	lecture: Lecture;

	constructor(private _lecturesService: LecturesService, private _routeParams: RouteParams, private _router: Router) { }

	ngOnInit() {
		let id = +this._routeParams.get('id');
        this.lecture = this._lecturesService.get(id);
	}

	getDifficulty(): string {
		return this._lecturesService.getLectureDifficultyAsText(this.lecture.difficulty);
	}

	getLectorName(): string {
		return this._lecturesService.getLectorName(this.lecture.lectorId);
	}

	toLocaleDateString(date: Date): string {
		return this._lecturesService.toLocaleDateString(date);
	}

	setSchedule(scheduled: boolean): void {
		this._lecturesService.setScheduled(this.lecture, scheduled);
	}

	setRating(rating: number): void {
        this.lecture.rating = rating;
    }

	gotoSpeaker(): void {
		var link = ['SpeakerDetail', { id: this.lecture.lectorId }];
		this._router.navigate(link);
	}
}