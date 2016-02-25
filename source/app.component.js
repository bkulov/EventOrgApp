System.register(['angular2/core', 'angular2/router', './services/speakers.service', './agenda.component', './services/lectures.service', './lectures.component', './speakers.component', './lecture-detail.component', './speaker-detail.component', './login-main.component', './loggedin-o365.component', './services/office365.service', './services/utils.service', './services/google.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, speakers_service_1, agenda_component_1, lectures_service_1, lectures_component_1, speakers_component_1, lecture_detail_component_1, speaker_detail_component_1, login_main_component_1, loggedin_o365_component_1, office365_service_1, utils_service_1, google_service_1;
    var EventApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (speakers_service_1_1) {
                speakers_service_1 = speakers_service_1_1;
            },
            function (agenda_component_1_1) {
                agenda_component_1 = agenda_component_1_1;
            },
            function (lectures_service_1_1) {
                lectures_service_1 = lectures_service_1_1;
            },
            function (lectures_component_1_1) {
                lectures_component_1 = lectures_component_1_1;
            },
            function (speakers_component_1_1) {
                speakers_component_1 = speakers_component_1_1;
            },
            function (lecture_detail_component_1_1) {
                lecture_detail_component_1 = lecture_detail_component_1_1;
            },
            function (speaker_detail_component_1_1) {
                speaker_detail_component_1 = speaker_detail_component_1_1;
            },
            function (login_main_component_1_1) {
                login_main_component_1 = login_main_component_1_1;
            },
            function (loggedin_o365_component_1_1) {
                loggedin_o365_component_1 = loggedin_o365_component_1_1;
            },
            function (office365_service_1_1) {
                office365_service_1 = office365_service_1_1;
            },
            function (utils_service_1_1) {
                utils_service_1 = utils_service_1_1;
            },
            function (google_service_1_1) {
                google_service_1 = google_service_1_1;
            }],
        execute: function() {
            //loggedingoogle
            EventApp = (function () {
                function EventApp() {
                }
                EventApp.prototype.goBack = function () {
                    window.history.back();
                };
                EventApp = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/login',
                            name: 'LoginMain',
                            component: login_main_component_1.LoginMainComponent,
                            useAsDefault: true
                        }, {
                            path: '/logedino365',
                            name: 'LoggedInO365',
                            component: loggedin_o365_component_1.LoggedInO365Component
                        }, {
                            path: '/agenda',
                            name: 'Agenda',
                            component: agenda_component_1.AgendaComponent
                        }, {
                            path: '/lectures',
                            name: 'Lectures',
                            component: lectures_component_1.LecturesComponent
                        }, {
                            path: '/lecture/:id',
                            name: 'LectureDetail',
                            component: lecture_detail_component_1.LectureDetailComponent
                        }, {
                            path: '/speakers',
                            name: 'Speakers',
                            component: speakers_component_1.SpeakersComponent
                        }, {
                            path: '/speaker/:id',
                            name: 'SpeakerDetail',
                            component: speaker_detail_component_1.SpeakerDetailComponent
                        }
                    ]),
                    core_1.Component({
                        selector: 'event-app',
                        template: "\n\t\t<button (click)=\"goBack()\">back</button>\n\t\t<nav>\n\t\t\t<a [routerLink]=\"['Agenda']\">Agenda</a>\n\t\t\t<a [routerLink]=\"['Lectures']\">Lectures</a>\n\t\t\t<a [routerLink]=\"['Speakers']\">Speakers</a>\n\t\t</nav>\n\t\t<router-outlet></router-outlet>\n\t",
                        providers: [speakers_service_1.SpeakersService, lectures_service_1.LecturesService, router_1.ROUTER_PROVIDERS, office365_service_1.Office365Service, utils_service_1.UtilsService, google_service_1.GoogleService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], EventApp);
                return EventApp;
            })();
            exports_1("EventApp", EventApp);
        }
    }
});
//# sourceMappingURL=app.component.js.map