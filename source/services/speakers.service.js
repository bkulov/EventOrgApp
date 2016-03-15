System.register(['../../jspm_packages/npm/angular2@2.0.0-beta.9/core', './speakers-mock'], function(exports_1, context_1) {
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
    var core_1, speakers_mock_1;
    var SpeakersService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (speakers_mock_1_1) {
                speakers_mock_1 = speakers_mock_1_1;
            }],
        execute: function() {
            let SpeakersService = class SpeakersService {
                constructor() {
                    this.speakers = [];
                    this.getSpeakers().then(speakers => this.speakers = speakers);
                }
                getSpeakers() {
                    return Promise.resolve(speakers_mock_1.SPEAKERSMOCK);
                }
                getSpeakerById(speakerId) {
                    var speakersById = this.speakers.filter((s) => { return s.id === speakerId; });
                    return speakersById ? speakersById[0] : null;
                }
            };
            SpeakersService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], SpeakersService);
            exports_1("SpeakersService", SpeakersService);
        }
    }
});
//# sourceMappingURL=speakers.service.js.map