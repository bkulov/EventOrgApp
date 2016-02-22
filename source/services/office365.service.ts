import {Injectable} from 'angular2/core';

@Injectable()
export class Office365Service {
	public code: string;
	public sessionState: string;

	login() {
		window.location.href = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=369c3963-47ad-44c2-80a0-012f6c726aa2&redirect_uri=http%3A%2F%2Flocalhost:3000%2Flogedino365&response_type=code&scope=https%3A%2F%2Foutlook.office.com%2Fmail.read';
	}

	setLoginData(code: string, sessionState: string): void {
		this.code = code;
		this.sessionState = sessionState;
	}
}