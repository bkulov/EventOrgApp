import {Injectable} from 'angular2/core';

@Injectable()
export class Office365Service {
	public code: string;
	public sessionState: string;

	login() {
		System.import('/O365_id.json').then((o365Config: Object) => {
			window.location.href = o365Config.url;
		});
	}

	setLoginData(code: string, sessionState: string): void {
		this.code = code;
		this.sessionState = sessionState;
	}
}