import {Injectable} from 'angular2/core';
import {UtilsService} from './utils.service';

@Injectable()
export class GoogleService {
	private _config: Object;
	private _token: Object;

	constructor(private _utilsService: UtilsService) { }

	// https://developers.google.com/oauthplayground
	// 1 - select and authorize APIs
	// 2 - get authorization token
	// 3 - GET request for a given resource. Authorization token from step 2 will be added to Authorization header

	_authenticate(): void {

		var scopes = [
			'https://www.googleapis.com/auth/plus.me',
			'https://www.googleapis.com/auth/calendar',
			'https://www.google.com/m8/feeds/contacts/default/full/'
		];

		var config = {
			'client_id': this._config.web.client_id,
			'scope': scopes
        };
        gapi.auth.authorize(config, () => {
			console.log('login complete');
			this._token = gapi.auth.getToken();
			console.log(this._token);

			// TODO: redirect to another page

        });
	}

	_getContacts(): void {
		// TODO: https GET request
	}

	login() {
		var aa = this._utilsService.loadJSON('/google_client_id.json', ((content: string) => {
			this._config = JSON.parse(content);

			if (!this._token) {
				this._authenticate();
			} else {
				this._getContacts();
			}
		}));
	}
}