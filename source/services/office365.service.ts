import {Injectable} from 'angular2/core';
import {UtilsService} from './utils.service';

@Injectable()
export class Office365Service {
	public code: string;
	public sessionState: string;

	constructor(private _utilsService: UtilsService) { }

	login() {
		var aa = this._utilsService.loadJSON('/O365_id.json', ((content: string) => {
			var o365Config = JSON.parse(content);

			window.location.href = o365Config.url;
		}));
	}

	setLoginData(code: string, sessionState: string): void {
		this.code = code;
		this.sessionState = sessionState;
	}
}