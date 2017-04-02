export default class {

	constructor () {
		firebase.initializeApp(this.initData());
	}

	initData () {
		return {
			apiKey: "AIzaSyB_twFUUVQcBg3QSZSyEfXCsl1n6oTeLro",
			authDomain: "mysite-53937.firebaseapp.com",
			databaseURL: "https://mysite-53937.firebaseio.com",
			projectId: "mysite-53937",
			storageBucket: "mysite-53937.appspot.com",
			messagingSenderId: "812222555535"
		};
	}
}