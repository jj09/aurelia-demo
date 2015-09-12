import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Github {
	constructor(http) {
		this.http = http;
	}

	activate() {
		return this.http
		.get('https://api.github.com/users/jj09/repos')
		.then(result => this.repos = JSON.parse(result.response));
	}
}