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
    var Office365Service;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (utils_service_1_1) {
                utils_service_1 = utils_service_1_1;
            }],
        execute: function() {
            Office365Service = (function () {
                function Office365Service(_utilsService) {
                    this._utilsService = _utilsService;
                }
                Office365Service.prototype.login = function () {
                    var aa = this._utilsService.loadJSON('/O365_id.json', (function (content) {
                        var o365Config = JSON.parse(content);
                        window.location.href = o365Config.url;
                    }));
                };
                Office365Service.prototype.setLoginData = function (code, sessionState) {
                    this.code = code;
                    this.sessionState = sessionState;
                };
                Office365Service = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [utils_service_1.UtilsService])
                ], Office365Service);
                return Office365Service;
            })();
            exports_1("Office365Service", Office365Service);
        }
    }
});
//# sourceMappingURL=office365.service.js.map