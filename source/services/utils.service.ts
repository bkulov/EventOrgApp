import {Injectable} from '../../jspm_packages/npm/angular2@2.0.0-beta.9/core';

@Injectable()
export class UtilsService {
	loadJSON(filePath: string, callback: (content: string) => void): void {
		var xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
		xobj.open('GET', filePath, true);
		xobj.onreadystatechange = function (): void {
			if (xobj.readyState == 4 && xobj.status == 200) {
				callback(xobj.responseText);
			}
		}
		xobj.send(null);

		// TODO: try to use System.import('some/data.json')
	}
}