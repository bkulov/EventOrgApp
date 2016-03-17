System.register(['angular2/core', 'angular2/router', './utils.service'], function(exports_1, context_1) {
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
    var core_1, router_1, utils_service_1;
    var GoogleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (utils_service_1_1) {
                utils_service_1 = utils_service_1_1;
            }],
        execute: function() {
            GoogleService = (function () {
                function GoogleService(_utilsService, _router) {
                    this._utilsService = _utilsService;
                    this._router = _router;
                    // TODO: check if this is needed
                    //gapi.auth.init(() => {});
                }
                // https://developers.google.com/oauthplayground
                // https://developers.google.com/apis-explorer/#p/
                // 1 - select and authorize APIs
                // 2 - get authorization token
                // 3 - GET request for a given resource. Authorization token from step 2 will be added to Authorization header
                GoogleService.prototype._authenticate = function () {
                    var _this = this;
                    var scopes = [
                        'https://www.googleapis.com/auth/plus.me',
                        'https://www.googleapis.com/auth/calendar',
                        'https://www.google.com/m8/feeds/contacts/default/full/'
                    ];
                    var config = {
                        'client_id': this._clientConfig.web.client_id,
                        'scope': scopes,
                        immediate: false // use true to refresh to token without showing UI
                    };
                    gapi.auth.authorize(config, function (token) {
                        console.log('login complete');
                        console.log(token);
                        _this._token = token;
                        // TODO: redirect to another page
                        //this._router.navigate(['Agenda']);
                    });
                };
                GoogleService.prototype._getContacts = function () {
                    // google plus using load
                    gapi.client.load('plus', 'v1')
                        .then(function (context) {
                        gapi.client.plus.activities.search({ 'query': 'Google+', 'orderBy': 'best' }).then(function (response) {
                            console.log('loading Google+ feed:');
                            console.log(response.result);
                        }, function (reason) {
                            console.log('Error: ' + reason.result.error.message);
                        });
                    });
                    // contacts
                    gapi.client.request({
                        'path': 'm8/feeds/contacts/default/full'
                    })
                        .then(function (response) {
                        console.log('loading Contacts:');
                        console.log(response);
                        window.open("data:text/xml;charset=utf-8," + response.body);
                    }, function (error) {
                        console.log(error);
                    });
                };
                GoogleService.prototype.login = function () {
                    var _this = this;
                    if (!this._clientConfig) {
                        this._utilsService.loadJSON('/google_client_id.json', (function (content) {
                            _this._clientConfig = JSON.parse(content);
                            _this._authenticate();
                        }));
                    }
                    else {
                        if (!this._token) {
                            this._authenticate();
                        }
                        else {
                            this._getContacts();
                        }
                    }
                };
                GoogleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [utils_service_1.UtilsService, router_1.Router])
                ], GoogleService);
                return GoogleService;
            }());
            exports_1("GoogleService", GoogleService);
        }
    }
});
//# sourceMappingURL=google.service.js.map