
declare var System: any;

import {Injectable} from 'angular2/core';

import * as Twitter from 'twitter';

import _ from 'lodash';

@Injectable()
export class TwitterService {
	// https://dev.twitter.com/overview/documentation
	// https://dev.twitter.com/oauth/overview/introduction
	// https://dev.twitter.com/web/sign-in/implementing
	// https://dev.twitter.com/web/intents
	// https://dev.twitter.com/rest/public

	login(): void {

		var config = {
			"consumerKey": "XXX",
			"consumerSecret": "XXX",
			"accessToken": "XXX",
			"accessTokenSecret": "XXX",
			"callBackUrl": "XXX"
		}

		_.forEach([1, 2, 3], function (e) {
			console.log(e);
		});

		var twitter = new Twitter(config);
	}
}