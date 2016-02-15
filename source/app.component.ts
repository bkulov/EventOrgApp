import {Component, OnInit} from 'angular2/core';

import {SpeakersService} from './services/speakers.service';
import {Speaker} from './services/speaker';

@Component({
	selector: 'event-app',
	template: `
		<nav>
			<a >Agenda</a>
			<a >Lectures</a>
			<a >Speakers</a>
		</nav>

		<ul>
			<li *ngFor="#speaker of speakers">
				{{speaker.name}}
			</li>
		</ul>
	`,
	providers: [SpeakersService]
})
export class EventApp implements OnInit {
	public speakers: Speaker[];

	constructor(private _speakersService: SpeakersService) { };

	ngOnInit() {
		this._speakersService.getSpeakers().then(speakers => this.speakers = speakers);
	}
}