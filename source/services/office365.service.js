System.register(['angular2/core'], function(exports_1) {
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
    var Office365Service;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Office365Service = (function () {
                function Office365Service() {
                }
                Office365Service.prototype.login = function () {
                    window.location.href = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=369c3963-47ad-44c2-80a0-012f6c726aa2&redirect_uri=http%3A%2F%2Flocalhost:3000%2Flogedino365&response_type=code&scope=https%3A%2F%2Foutlook.office.com%2Fmail.read';
                };
                Office365Service.prototype.setLoginData = function (code, sessionState) {
                    this.code = code;
                    this.sessionState = sessionState;
                };
                Office365Service = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Office365Service);
                return Office365Service;
            })();
            exports_1("Office365Service", Office365Service);
        }
    }
});
//# sourceMappingURL=office365.service.js.map