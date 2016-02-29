import {Component, OnInit} from 'angular2/core'; 
import {Router} from 'angular2/router';

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