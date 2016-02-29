import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {LecturesListComponent} from './lectures-list.component';

@Component({
	selector: 'agenda',
	templateUrl: '/source/templates/agenda.html',
	directives: [LecturesListComponent]
})
export class AgendaComponent {
	constructor(private _router: Router) { }

	onAddLectures() {
        this._router.navigate(['Lectures']);
	}
}