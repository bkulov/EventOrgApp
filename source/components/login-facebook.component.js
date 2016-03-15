System.register(['../../jspm_packages/npm/angular2@2.0.0-beta.9/core', '../../jspm_packages/npm/angular2@2.0.0-beta.9/router', '../services/facebook.service'], function(exports_1, context_1) {
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
    var core_1, router_1, facebook_service_1;
    var LoginFacebookComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (facebook_service_1_1) {
                facebook_service_1 = facebook_service_1_1;
            }],
        execute: function() {
            let LoginFacebookComponent = class LoginFacebookComponent {
                constructor(_router, _facebookService) {
                    this._router = _router;
                    this._facebookService = _facebookService;
                }
                ngOnInit() {
                    this._facebookService.fbInit();
                }
                login() {
                    this._facebookService.login(() => {
                        console.log('Callback executed');
                        //this._router.navigate(['Agenda']);
                    });
                }
                logout() {
                    this._facebookService.logout();
                }
            };
            LoginFacebookComponent = __decorate([
                core_1.Component({
                    selector: 'login-facebook',
                    templateUrl: '/source/templates/login-facebook.html'
                }), 
                __metadata('design:paramtypes', [router_1.Router, facebook_service_1.FacebookService])
            ], LoginFacebookComponent);
            exports_1("LoginFacebookComponent", LoginFacebookComponent);
        }
    }
});
//# sourceMappingURL=login-facebook.component.js.map