import {Component, OnInit} from '../../jspm_packages/npm/angular2@2.0.0-beta.9/core';
import {Router} from '../../jspm_packages/npm/angular2@2.0.0-beta.9/router';

import {Office365Service} from '../services/office365.service';
import {GoogleService} from '../services/google.service';
import {TwitterService} from '../services/twitter.service';

@Component({
	selector: 'login',
	templateUrl: '/source/templates/login.html'
})
export class LoginMainComponent implements OnInit {

	constructor(private _router: Router, private _office365Service: Office365Service, private _googleService: GoogleService,
		private _twitterService: TwitterService) { }

	ngOnInit(): void {
		var aa = 0;
	}

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