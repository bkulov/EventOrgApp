import {Component, OnInit} from '../../jspm_packages/npm/angular2@2.0.0-beta.9/core'; 
import {Router} from '../../jspm_packages/npm/angular2@2.0.0-beta.9/router';

import {FacebookService} from '../services/facebook.service';

@Component({
	selector: 'login-facebook',
	templateUrl: '/source/templates/login-facebook.html'
})
export class LoginFacebookComponent implements OnInit {

	constructor(private _router: Router, private _facebookService: FacebookService) { }

	ngOnInit() {
		this._facebookService.fbInit();
	}

	login(): void {
		this._facebookService.login(() => {
			console.log('Callback executed');
			//this._router.navigate(['Agenda']);
		});
	}

	logout(): void {
		this._facebookService.logout();
	}
}