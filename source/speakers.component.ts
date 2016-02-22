import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {SpeakersService} from './services/speakers.service';
import {Speaker} from './services/speaker';

@Component({
	selector: 'speakers',
	templateUrl: './source/templates/speakers.html',
	styleUrls: ['./source/css/speakers.css']
})
export class SpeakersComponent implements OnInit {
	speakers: Speaker[] = [];

	constructor(private _speakersService: SpeakersService, private _router: Router) { }

	ngOnInit() {
		this._speakersService.getSpeakers().then(speakers => this.speakers = speakers);
	}

	gotoDetails(speaker: Speaker): void {
		var link = ['SpeakerDetail', { id: speaker.id }];
		this._router.navigate(link);
	}
}