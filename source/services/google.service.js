System.register(['angular2/core', './utils.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, utils_service_1;
    var GoogleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (utils_service_1_1) {
                utils_service_1 = utils_service_1_1;
            }],
        execute: function() {
            GoogleService = (function () {
                function GoogleService(_utilsService) {
                    this._utilsService = _utilsService;
                }
                // https://developers.google.com/oauthplayground
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
                        'client_id': this._config.web.client_id,
                        'scope': scopes
                    };
                    gapi.auth.authorize(config, function () {
                        console.log('login complete');
                        _this._token = gapi.auth.getToken();
                        console.log(_this._token);
                        // TODO: redirect to another page
                    });
                };
                GoogleService.prototype._getContacts = function () {
                    // TODO: https GET request
                };
                GoogleService.prototype.login = function () {
                    var _this = this;
                    var aa = this._utilsService.loadJSON('/google_client_id.json', (function (content) {
                        _this._config = JSON.parse(content);
                        if (!_this._token) {
                            _this._authenticate();
                        }
                        else {
                            _this._getContacts();
                        }
                    }));
                };
                GoogleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [utils_service_1.UtilsService])
                ], GoogleService);
                return GoogleService;
            })();
            exports_1("GoogleService", GoogleService);
        }
    }
});
//# sourceMappingURL=google.service.js.map