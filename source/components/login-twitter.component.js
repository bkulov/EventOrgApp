System.register(['angular2/core', 'angular2/router', '../services/twitter.service'], function(exports_1, context_1) {
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
    var core_1, router_1, twitter_service_1;
    var LoginTwitterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (twitter_service_1_1) {
                twitter_service_1 = twitter_service_1_1;
            }],
        execute: function() {
            LoginTwitterComponent = (function () {
                function LoginTwitterComponent(_router, _twitterService) {
                    this._router = _router;
                    this._twitterService = _twitterService;
                    this.twitterPin = "";
                }
                LoginTwitterComponent.prototype.btnOkClick = function () {
                    var _this = this;
                    this._twitterService.validatePin(this.twitterPin).then(function (result) {
                        if (result) {
                            _this._router.navigate(['Agenda']);
                        }
                        else {
                            console.log("Invalid PIN. Try again!");
                        }
                    });
                };
                LoginTwitterComponent = __decorate([
                    core_1.Component({
                        selector: 'login-twitter',
                        templateUrl: '/source/templates/login-twitter.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, twitter_service_1.TwitterService])
                ], LoginTwitterComponent);
                return LoginTwitterComponent;
            }());
            exports_1("LoginTwitterComponent", LoginTwitterComponent);
        }
    }
});
//# sourceMappingURL=login-twitter.component.js.map