import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {Office365Service} from '../services/office365.service';
import {GoogleService} from '../services/google.service';
import {TwitterService} from '../services/twitter.service';

@Component({
	selector: 'login',
	templateUrl: '/source/templates/login.html'
})
export class LoginMainComponent {

	constructor(private _router: Router, private _office365Service: Office365Service, private _googleService: GoogleService,
		private _twitterService: TwitterService) { }

	loginOffice365(): void {
		this._office365Service.login();
	}

	loginGoogle(): void {
		this._googleService.login();
	}

	loginFacebook(): void {
		this._router.navigate(['LoginFB']);
	}

	loginTwitter(): void {
		this._twitterService.login();
	}
}