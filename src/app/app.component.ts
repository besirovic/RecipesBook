import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	loadedFeature = 'recipe';

	ngOnInit() {

		firebase.initializeApp({
			apiKey: "___API_KEY___",
    		authDomain: "___AUTH_DOMAIN___"
		});

	}

	onNavigate(feature: string) {
		this.loadedFeature = feature;
	}

}
