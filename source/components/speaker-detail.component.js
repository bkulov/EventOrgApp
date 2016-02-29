System.register(['angular2/core', 'angular2/router', '../services/lectures.service', '../services/speakers.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, lectures_service_1, speakers_service_1;
    var SpeakerDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (lectures_service_1_1) {
                lectures_service_1 = lectures_service_1_1;
            },
            function (speakers_service_1_1) {
                speakers_service_1 = speakers_service_1_1;
            }],
        execute: function() {
            SpeakerDetailComponent = (function () {
                function SpeakerDetailComponent(_lecturesService, _speakersService, _routeParams) {
                    this._lecturesService = _lecturesService;
                    this._speakersService = _speakersService;
                    this._routeParams = _routeParams;
                }
                SpeakerDetailComponent.prototype.ngOnInit = function () {
                    var id = +this._routeParams.get('id');
                    this.speaker = this._speakersService.getSpeakerById(id);
                    this.lectures = this._lecturesService.allBySpeaker(id);
                };
                SpeakerDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'speaker-detail',
                        templateUrl: '/source/templates/speaker-detail.html',
                        styleUrls: ['source/css/speakers.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [lectures_service_1.LecturesService, speakers_service_1.SpeakersService, router_1.RouteParams])
                ], SpeakerDetailComponent);
                return SpeakerDetailComponent;
            })();
            exports_1("SpeakerDetailComponent", SpeakerDetailComponent);
        }
    }
});
//# sourceMappingURL=speaker-detail.component.js.map