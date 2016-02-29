import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';

import {UtilsService} from './utils.service';

declare var gapi: any;

@Injectable()
export class GoogleService {
	private _clientConfig: Object;
	private _token: Object;

	constructor(private _utilsService: UtilsService, private _router: Router) {
		// TODO: check if this is needed
		//gapi.auth.init(() => {});
	}

	// https://developers.google.com/oauthplayground
	// https://developers.google.com/apis-explorer/#p/
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
			'client_id': this._clientConfig.web.client_id,
			'scope': scopes,
			immediate: false	// use true to refresh to token without showing UI
        };

        gapi.auth.authorize(config, (token) => {
			console.log('login complete');
			console.log(token);
			this._token = token;

			// TODO: redirect to another page
			//this._router.navigate(['Agenda']);
        });
	}

	_getContacts(): void {
		// google plus using load
		gapi.client.load('plus', 'v1')
			.then((context) => {
				gapi.client.plus.activities.search({ 'query': 'Google+', 'orderBy': 'best' }).then(function (response) {
					console.log('loading Google+ feed:');
					console.log(response.result);
				}, function (reason) {
					console.log('Error: ' + reason.result.error.message);
				});
			});

		// contacts
		gapi.client.request({
			'path': 'm8/feeds/contacts/default/full'
		})
			.then((response) => {
				console.log('loading Contacts:');
				console.log(response);

				window.open("data:text/xml;charset=utf-8," + response.body);
			}, (error) => {
				console.log(error);
			});
	}

	login() {
		if (!this._clientConfig) {
			this._utilsService.loadJSON('/google_client_id.json', ((content: string) => {
				this._clientConfig = JSON.parse(content);

				this._authenticate();
			}));
		} else {
			if (!this._token) {
				this._authenticate();
			} else {
				this._getContacts();
			}
		}

	}
}