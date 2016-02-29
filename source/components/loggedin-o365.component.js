System.register(['angular2/core', 'angular2/router', '../services/office365.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, office365_service_1;
    var LoggedInO365Component;
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
            }],
        execute: function() {
            LoggedInO365Component = (function () {
                function LoggedInO365Component(_office365Service, _routeParams, _router) {
                    this._office365Service = _office365Service;
                    this._routeParams = _routeParams;
                    this._router = _router;
                }
                LoggedInO365Component.prototype.ngOnInit = function () {
                    var code = this._routeParams.get('code');
                    var sessionState = this._routeParams.get('session_state');
                    this._office365Service.setLoginData(code, sessionState);
                    this._router.navigate(['Agenda']);
                };
                LoggedInO365Component = __decorate([
                    core_1.Component({
                        selector: 'logedin-o365',
                        template: "\n\t\t<div>\n\t\t\t<p>Redirecting...</p>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [office365_service_1.Office365Service, router_1.RouteParams, router_1.Router])
                ], LoggedInO365Component);
                return LoggedInO365Component;
            })();
            exports_1("LoggedInO365Component", LoggedInO365Component);
        }
    }
});
//# sourceMappingURL=loggedin-o365.component.js.map