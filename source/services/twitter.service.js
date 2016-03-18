System.register(['angular2/core', 'twitter', 'lodash'], function(exports_1, context_1) {
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
    var core_1, Twitter, lodash_1;
    var TwitterService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Twitter_1) {
                Twitter = Twitter_1;
            },
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            }],
        execute: function() {
            TwitterService = (function () {
                function TwitterService() {
                }
                // https://dev.twitter.com/overview/documentation
                // https://dev.twitter.com/oauth/overview/introduction
                // https://dev.twitter.com/web/sign-in/implementing
                // https://dev.twitter.com/web/intents
                // https://dev.twitter.com/rest/public
                TwitterService.prototype.login = function () {
                    var config = {
                        "consumerKey": "XXX",
                        "consumerSecret": "XXX",
                        "accessToken": "XXX",
                        "accessTokenSecret": "XXX",
                        "callBackUrl": "XXX"
                    };
                    lodash_1.default.forEach([1, 2, 3], function (e) {
                        console.log(e);
                    });
                    var twitter = new Twitter(config);
                };
                TwitterService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TwitterService);
                return TwitterService;
            }());
            exports_1("TwitterService", TwitterService);
        }
    }
});
//# sourceMappingURL=twitter.service.js.map