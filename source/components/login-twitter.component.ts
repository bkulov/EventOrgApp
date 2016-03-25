import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {TwitterService} from '../services/twitter.service';

@Component({
	selector: 'login-twitter',
	templateUrl: '/source/templates/login-twitter.html'
})
export class LoginTwitterComponent {

	twitterPin: string = "";

	constructor (private _router: Router, private _twitterService: TwitterService) { }

	btnOkClick(): void {

		this._twitterService.validatePin(this.twitterPin).then((result: boolean) => {
			if (result) {
				this._router.navigate(['Agenda']);
			} else {
				console.log("Invalid PIN. Try again!");
			}
		});
	}
}