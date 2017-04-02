import * as firebase from 'firebase';
import 'firebase/database';

/**
 * @class DataModule
 *
 * @description
 * Gets all the data from firebase and builds the components
 *
 */
export default class DataModule {

	/**
	 * @constructor
	 */
	constructor () {
		this.main = document.querySelector('main');
		firebase.initializeApp(DataModule.initData());
		firebase.database().ref().once('value').then((snapshot) => {
			debugger;
			this.buildPage(snapshot.val());
		});
	}

	/**
	 * @description
	 * Returns the values required to initilize fire base
	 *
	 * @returns {{apiKey: string, authDomain: string, databaseURL: string, projectId: string, storageBucket: string, messagingSenderId: string}}
	 */
	static initData () {
		return {
			apiKey: "AIzaSyB_twFUUVQcBg3QSZSyEfXCsl1n6oTeLro",
			authDomain: "mysite-53937.firebaseapp.com",
			databaseURL: "https://mysite-53937.firebaseio.com",
			projectId: "mysite-53937",
			storageBucket: "mysite-53937.appspot.com",
			messagingSenderId: "812222555535"
		};
	}

	buildPage (data) {
		this.main.appendChild(DataModule.buildHeading(data.name));
		this.main.appendChild(DataModule.buildDescription(data.description));
	}

	static buildHeading (heading) {
		let headingElement = document.createElement("h1");
		headingElement.innerHTML = heading;
		return headingElement;
	}

	static buildDescription (description) {
		let headingElement = document.createElement("p");
		headingElement.innerHTML = description;
		return headingElement;
	}
}