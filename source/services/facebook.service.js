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
    var FacebookService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let FacebookService = class FacebookService {
                // https://developers.facebook.com/docs/facebook-login/web
                // https://developers.facebook.com/docs/facebook-login/permissions
                _testAPI() {
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
                _statusChangeCallback(response) {
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
                    }
                    else if (response.status === 'not_authorized') {
                        // The person is logged into Facebook, but not your app.
                        console.log('Please log into this app.');
                    }
                    else {
                        // The person is not logged into Facebook, so we're not sure if
                        // they are logged into this app or not.
                        console.log('Please log into Facebook.');
                    }
                    return false;
                }
                fbInit() {
                    window.fbAsyncInit = function () {
                        FB.init({
                            appId: '236732133335142',
                            xfbml: true,
                            version: 'v2.5'
                        });
                    };
                    (function (d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) {
                            return;
                        }
                        js = d.createElement(s);
                        js.id = id;
                        js.src = "//connect.facebook.net/en_US/sdk.js";
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                }
                login(successCallback) {
                    // check if the user is already logged-in
                    FB.getLoginStatus((response) => {
                        var isLogged = this._statusChangeCallback(response);
                        if (isLogged) {
                            // user logged-in
                            successCallback();
                        }
                        else {
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
                logout() {
                    FB.logout((response) => {
                        console.log(response);
                    });
                }
            };
            FacebookService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], FacebookService);
            exports_1("FacebookService", FacebookService);
        }
    }
});
//# sourceMappingURL=facebook.service.js.map