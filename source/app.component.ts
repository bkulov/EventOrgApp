import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {SpeakersService} from './services/speakers.service';
import {AgendaComponent} from './agenda.component';
import {LecturesService} from './services/lectures.service';
import {LecturesComponent} from './lectures.component';
import {SpeakersComponent} from './speakers.component';
import {LectureDetailComponent} from './lecture-detail.component';

@RouteConfig([
    {
        path: '/agenda',
        name: 'Agenda',
        component: AgendaComponent,
        useAsDefault: true
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
        component: SpeakersComponent
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
	providers: [SpeakersService, LecturesService, ROUTER_PROVIDERS],
	directives: [ROUTER_DIRECTIVES]

})
export class EventApp{
	goBack() {
		window.history.back();
	}
}