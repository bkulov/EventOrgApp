///<reference path="../../jspm_packages/npm/angular2@2.0.0-beta.9/core.d.ts"/>
///<reference path="../../jspm_packages/npm/angular2@2.0.0-beta.9/router.d.ts"/>

import {Component, OnInit} from '../../jspm_packages/npm/angular2@2.0.0-beta.9/core';
import {Router} from '../../jspm_packages/npm/angular2@2.0.0-beta.9/router';

import {LecturesListComponent} from './lectures-list.component';

@Component({
	selector: 'agenda',
	templateUrl: '/source/templates/agenda.html',
	directives: [LecturesListComponent]
})
export class AgendaComponent implements OnInit {
	constructor(private _router: Router) { }

	onAddLectures() {
        this._router.navigate(['Lectures']);
	}

	ngOnInit(): void {
		var aa = 0;
	}
}