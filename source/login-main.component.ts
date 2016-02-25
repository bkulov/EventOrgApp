import {Component} from 'angular2/core';

import {Office365Service} from './services/office365.service';
import {GoogleService} from './services/google.service';

@Component({
	selector: 'login',
	templateUrl: './source/templates/login.html'
})
export class LoginMainComponent {

	constructor(private _office365Service: Office365Service, private _googleService: GoogleService) { }

	loginOffice365(): void {
		this._office365Service.login();
	}

	loginGoogle(): void {
		this._googleService.login();
	}
}