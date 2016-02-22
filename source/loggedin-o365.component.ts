import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {Office365Service} from './services/office365.service';

@Component({
	selector: 'logedin-o365',
	template: `
		<div>
			<p>Redirecting...</p>
		</div>
	`
})
export class LoggedInO365Component implements OnInit {
	constructor(private _office365Service: Office365Service, private _routeParams: RouteParams, private _router: Router) { }

	ngOnInit() {
		let code = this._routeParams.get('code');
		let sessionState = this._routeParams.get('session_state');

		this._office365Service.setLoginData(code, sessionState);

		this._router.navigate(['Agenda']);
	}
}