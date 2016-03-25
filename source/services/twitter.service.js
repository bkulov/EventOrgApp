System.register(['angular2/core', 'codebird'], function(exports_1, context_1) {
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
            },
            function (_1) {}],
        execute: function() {
            TwitterService = (function () {
                function TwitterService() {
                }
                TwitterService.prototype.login = function () {
                    var _this = this;
                    System.import("/twitter.json").then(function (twitterConfig) {
                        _this._twitterConfig = twitterConfig;
                        if (_this._cb === undefined) {
                            _this._cb = new Codebird();
                        }
                        _this._cb.setConsumerKey(twitterConfig.apiKey, twitterConfig.apiSecret);
                        _this._cb.__call("oauth_requestToken", { oauth_callback: "oob" }, function (reply, rate, err) {
                            if (err) {
                                console.log("error response or timeout exceeded" + err.error);
                            }
                            if (reply) {
                                console.log(reply);
                                // stores it
                                _this._cb.setToken(reply.oauth_token, reply.oauth_token_secret);
                                // gets the authorize screen URL
                                _this._cb.__call("oauth_authorize", {}, function (auth_url) {
                                    _this._codebirdAuthWindow = window.open(auth_url);
                                });
                            }
                        });
                    });
                };
                TwitterService.prototype.validatePin = function (pin) {
                    var self = this;
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
                        }
                        else {
                            resolve(false);
                        }
                    });
                    return result;
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