import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {SpeakersService} from './services/speakers.service';
import {Speaker} from './services/speaker';
import {AgendaComponent} from './agenda.component';
import {LecturesService} from './services/lectures.service';
import {LecturesComponent} from './lectures.component';

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
        component: AgendaComponent
    }, {
        path: '/speakers',
        name: 'Speakers',
        component: AgendaComponent
    }, {
        path: '/speaker/:id',
        name: 'SpeakerDetail',
        component: AgendaComponent
    }
])

@Component({
	selector: 'event-app',
	template: `
		<button (click)="goBack()">back</button><h2>Selected tab</h2>
		<nav>
			<a [routerLink]="['Agenda']">Agenda</a>
			<a [routerLink]="['Lectures']">Lectures</a>
			<a [routerLink]="['Speakers']">Speakers</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	providers: [SpeakersService, LecturesService, ROUTER_PROVIDERS],
	directives: [ROUTER_DIRECTIVES, AgendaComponent]

})
export class EventApp{
	goBack() {
		window.history.back();
	}
}