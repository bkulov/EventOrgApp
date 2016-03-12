import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {SpeakersService} from '../services/speakers.service';
import {AgendaComponent} from './agenda.component';
import {LecturesService} from '../services/lectures.service';
import {LecturesComponent} from './lectures.component';
import {SpeakersComponent} from './speakers.component';
import {LectureDetailComponent} from './lecture-detail.component';
import {SpeakerDetailComponent} from './speaker-detail.component';
import {LoginMainComponent} from './login-main.component';
import {LoggedInO365Component} from './loggedin-o365.component';
import {Office365Service} from '../services/office365.service';
import {UtilsService} from '../services/utils.service';
import {GoogleService} from '../services/google.service';
import {LoginFacebookComponent} from './login-facebook.component';
import {FacebookService} from '../services/facebook.service';
import {TwitterService} from '../services/twitter.service';

@RouteConfig([
	{
        path: '/login',
        name: 'LoginMain',
        component: LoginMainComponent,
        useAsDefault: true
	}, {
        path: '/logedino365',
        name: 'LoggedInO365',
        component: LoggedInO365Component
	}, {
        path: '/agenda',
        name: 'Agenda',
        component: AgendaComponent
    }, {
        path: '/lectures',
        name: 'Lectures',
        component: LecturesComponent
    }, {
        path: '/lecture/:id',
        name: 'LectureDetail',
        component: LectureDetailComponent
    }, {
        path: '/speakers',
        name: 'Speakers',
        component: SpeakersComponent
    }, {
        path: '/speaker/:id',
        name: 'SpeakerDetail',
        component: SpeakerDetailComponent
    }, {
		path: '/loginfb',
		name: 'LoginFB',
		component: LoginFacebookComponent
	}
])

@Component({
	selector: 'event-app',
	template: `
		<button (click)="goBack()">back</button>
		<nav>
			<a [routerLink]="['Agenda']">Agenda</a>
			<a [routerLink]="['Lectures']">Lectures</a>
			<a [routerLink]="['Speakers']">Speakers</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	providers: [SpeakersService, LecturesService, ROUTER_PROVIDERS, Office365Service, UtilsService, GoogleService, FacebookService,
		TwitterService],
	directives: [ROUTER_DIRECTIVES]

})
export class EventApp{
	goBack() {
		window.history.back();
	}
}