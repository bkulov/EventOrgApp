import {Injectable} from '../../jspm_packages/npm/angular2@2.0.0-beta.9/core';

//import {Twitter} from 'twitter-node-client/index';

//import {Twitter} from 'twitter-node-client/index.js';

//import * as lib from 'twitter-node-client/index.js';

//import {Twitter} from 'node_modules/twitter-node-client/index.js';
//import {Twitter} from 'node_modules/twitter/index.js';

//import _ from '/node_modules/twitter-node-client/index.js';

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

		//var twitter = new Twitter(config);
		//console.log(twitter);

		//System.import('/node_modules/twitter-node-client/index.js').then(function (m) {
		//	console.log(m);
		//});

	}
}