System.register(['../../jspm_packages/npm/angular2@2.0.0-beta.9/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TwitterService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import {Twitter} from 'twitter-node-client/index';
            //import {Twitter} from 'twitter-node-client/index.js';
            //import * as lib from 'twitter-node-client/index.js';
            //import {Twitter} from 'node_modules/twitter-node-client/index.js';
            //import {Twitter} from 'node_modules/twitter/index.js';
            //import _ from '/node_modules/twitter-node-client/index.js';
            let TwitterService = class TwitterService {
                // https://dev.twitter.com/overview/documentation
                // https://dev.twitter.com/oauth/overview/introduction
                // https://dev.twitter.com/web/sign-in/implementing
                // https://dev.twitter.com/web/intents
                // https://dev.twitter.com/rest/public
                login() {
                    var config = {
                        "consumerKey": "XXX",
                        "consumerSecret": "XXX",
                        "accessToken": "XXX",
                        "accessTokenSecret": "XXX",
                        "callBackUrl": "XXX"
                    };
                    //var twitter = new Twitter(config);
                    //console.log(twitter);
                    //System.import('/node_modules/twitter-node-client/index.js').then(function (m) {
                    //	console.log(m);
                    //});
                }
            };
            TwitterService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], TwitterService);
            exports_1("TwitterService", TwitterService);
        }
    }
});
//# sourceMappingURL=twitter.service.js.map