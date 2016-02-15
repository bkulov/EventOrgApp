import {Speaker} from './speaker';
import {SpeakersMock} from './speakers-mock';

export class SpeakersService {
	getSpeakers() {
		return Promise.resolve(SpeakersMock);
	}
}