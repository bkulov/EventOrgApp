import {Component, OnInit} from '../../jspm_packages/npm/angular2@2.0.0-beta.9/core';
import {RouteParams, ROUTER_DIRECTIVES} from '../../jspm_packages/npm/angular2@2.0.0-beta.9/router';

import {Lecture} from '../services/lecture';
import {Speaker} from '../services/speaker';
import {LecturesService} from '../services/lectures.service';
import {SpeakersService} from '../services/speakers.service';

@Component({
	selector: 'speaker-detail',
	templateUrl: '/source/templates/speaker-detail.html',
	styleUrls: ['source/css/speakers.css'],
	directives: [ROUTER_DIRECTIVES]
})
export class SpeakerDetailComponent implements OnInit{
	speaker: Speaker;
	lectures: Lecture[];

	constructor(private _lecturesService: LecturesService, private _speakersService: SpeakersService, private _routeParams: RouteParams) { }

	ngOnInit() {
		let id = +this._routeParams.get('id');
		this.speaker = this._speakersService.getSpeakerById(id);
		this.lectures = this._lecturesService.allBySpeaker(id);
	}
}
