import {Injectable} from '../../jspm_packages/npm/angular2@2.0.0-beta.9/core';

import {Speaker} from './speaker';
import {SPEAKERSMOCK} from './speakers-mock';

@Injectable()
export class SpeakersService{
	public speakers: Speaker[] = [];

	constructor() {
		this.getSpeakers().then(speakers => this.speakers = speakers);
	}

	getSpeakers(): Promise<Speaker[]> {
		return Promise.resolve(SPEAKERSMOCK);
	}

	getSpeakerById(speakerId: number): Speaker {
		var speakersById = this.speakers.filter((s: Speaker) => { return s.id === speakerId; });

		return speakersById ? speakersById[0] : null;
	}
}