import {Injectable} from 'angular2/core';

// TODO: check if the following import is going to work in the future
//import {Codebird} from 'codebird';
import 'codebird';

@Injectable()
export class TwitterService {
	// https://dev.twitter.com/overview/documentation
	// https://dev.twitter.com/oauth/overview/introduction
	// https://dev.twitter.com/web/sign-in/implementing
	// https://dev.twitter.com/web/intents
	// https://dev.twitter.com/rest/public
	// https://github.com/jublonet/codebird-js

	private _codebirdAuthWindow: Window;
	private _twitterConfig: Object;
	private _cb: Codebird;
	private _authToken: string;

	login(): void {
		System.import("/twitter.json").then((twitterConfig: Object) => {
			this._twitterConfig = twitterConfig;

			if (this._cb === undefined) {
				this._cb = new Codebird();
			}

			this._cb.setConsumerKey(twitterConfig.apiKey, twitterConfig.apiSecret);

			this._cb.__call("oauth_requestToken", { oauth_callback: "oob" }, (reply, rate, err) => {
				if (err) {
					console.log("error response or timeout exceeded" + err.error);
				}
				if (reply) {
					console.log(reply);

					// stores it
					this._cb.setToken(reply.oauth_token, reply.oauth_token_secret);

					// gets the authorize screen URL
					this._cb.__call("oauth_authorize", {}, (auth_url) => {
						this._codebirdAuthWindow = window.open(auth_url);
					});
				}
			});
		});
	}

	validatePin(pin: string): Promise<boolean> {
		let self = this;

		var result = new Promise(function (resolve, reject) {
			if (self._cb !== undefined) {
				self._cb.__call("oauth_accessToken", { oauth_verifier: pin }, function (reply, rate, err) {
					if (err) {
						console.log("error response or timeout exceeded" + err.error);
					}
					if (reply && reply.httpstatus == 200 && reply.oauth_token) {
						// store the authenticated token, which may be different from the request token (!)
						self._cb.setToken(reply.oauth_token, reply.oauth_token_secret);
						self._authToken = reply.oauth_token;

						if (self._codebirdAuthWindow !== undefined) {
							self._codebirdAuthWindow.close();
						}

						resolve(true);
					}

					// if you need to persist the login after page reload,
					// consider storing the token in a cookie or HTML5 local storage
					resolve(false);
				});
			} else {
				resolve(false);
			}
		});

		return result;
	}
}