import {Component, OnInit} from 'angular2/core';

import {SpeakersService} from './services/speakers.service';
import {Speaker} from './services/speaker';

@Component({
	selector: 'speakers',
	templateUrl: './source/templates/speakers.html'
})
export class SpeakersComponent implements OnInit {
	speakers: Speaker[] = [];

	constructor(private _speakersService: SpeakersService) { }

	ngOnInit() {
		this._speakersService.getSpeakers().then(speakers => this.speakers = speakers);
	}
}