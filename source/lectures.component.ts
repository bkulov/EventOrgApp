import {Component} from 'angular2/core';

import {LecturesListComponent} from './lectures-list.component';

@Component({
	selector: 'lectures',
	template: `
	<div class="padding">
		<lectures-list [showOnlyScheduled]="false"></lectures-list>
	</div>
	`,
	directives: [LecturesListComponent]
})
export class LecturesComponent { }
