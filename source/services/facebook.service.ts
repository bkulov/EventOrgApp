import {Injectable} from 'angular2/core';

declare var FB: any;

@Injectable()
export class FacebookService {
	// https://developers.facebook.com/docs/facebook-login/web
	// https://developers.facebook.com/docs/facebook-login/permissions

	_testAPI(): void {
		console.log('Welcome!  Fetching your information.... ');
		FB.api('/me', function (response) {
			//console.log('Successful login for: ' + response.name);
			console.log('API /me:');
			console.log(response);
		});

		FB.api('/me/feed', function (response) {
			console.log('API feed:');
			console.log(response);
		});
	}

	// This is called with the results from from FB.getLoginStatus().
	_statusChangeCallback(response: Object): boolean {
		console.log('statusChangeCallback');
		console.log(response);

		// The response object is returned with a status field that lets the
		// app know the current login status of the person.
		// Full docs on the response object can be found in the documentation
		// for FB.getLoginStatus().
		if (response.status === 'connected') {
			// Logged into your app and Facebook.
			this._testAPI();

			return true;
		} else if (response.status === 'not_authorized') {
			// The person is logged into Facebook, but not your app.
			console.log('Please log into this app.');
		} else {
			// The person is not logged into Facebook, so we're not sure if
			// they are logged into this app or not.
			console.log('Please log into Facebook.');
		}

		return false;
	}

	fbInit(): void {
		window.fbAsyncInit = function () {
			FB.init({
				appId: '236732133335142',
				xfbml: true,
				version: 'v2.5'
			});
		};

		(function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) { return; }
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		} (document, 'script', 'facebook-jssdk'));
	}

	login(successCallback: () => void): void {
		// check if the user is already logged-in
		FB.getLoginStatus((response) => {
			var isLogged = this._statusChangeCallback(response);

			if (isLogged) {
				// user logged-in
				successCallback();
			} else {
				// not logged-in. try to log in
				FB.login((responseLogin) => {
					isLogged = this._statusChangeCallback(responseLogin);
					if (isLogged) {
						successCallback();
					}
				}, { scope: 'user_posts' });
			}
		});
	}

	logout(): void {
		FB.logout((response) => {
			console.log(response);
		});
	}

}