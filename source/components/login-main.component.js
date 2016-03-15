System.register(['../../jspm_packages/npm/angular2@2.0.0-beta.9/core', '../../jspm_packages/npm/angular2@2.0.0-beta.9/router', '../services/office365.service', '../services/google.service', '../services/twitter.service'], function(exports_1, context_1) {
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
    var core_1, router_1, office365_service_1, google_service_1, twitter_service_1;
    var LoginMainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (office365_service_1_1) {
                office365_service_1 = office365_service_1_1;
            },
            function (google_service_1_1) {
                google_service_1 = google_service_1_1;
            },
            function (twitter_service_1_1) {
                twitter_service_1 = twitter_service_1_1;
            }],
        execute: function() {
            let LoginMainComponent = class LoginMainComponent {
                constructor(_router, _office365Service, _googleService, _twitterService) {
                    this._router = _router;
                    this._office365Service = _office365Service;
                    this._googleService = _googleService;
                    this._twitterService = _twitterService;
                }
                ngOnInit() {
                    var aa = 0;
                }
                loginOffice365() {
                    this._office365Service.login();
                }
                loginGoogle() {
                    this._googleService.login();
                }
                loginFacebook() {
                    this._router.navigate(['LoginFB']);
                }
                loginTwitter() {
                    this._twitterService.login();
                }
            };
            LoginMainComponent = __decorate([
                core_1.Component({
                    selector: 'login',
                    templateUrl: '/source/templates/login.html'
                }), 
                __metadata('design:paramtypes', [router_1.Router, office365_service_1.Office365Service, google_service_1.GoogleService, twitter_service_1.TwitterService])
            ], LoginMainComponent);
            exports_1("LoginMainComponent", LoginMainComponent);
        }
    }
});
//# sourceMappingURL=login-main.component.js.map