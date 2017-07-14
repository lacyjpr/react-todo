import firebase from 'firebase';

try {
	var config = {
		apiKey: "AIzaSyBXUHD1LiZ7MBqMNR6q0aVtnYTvCVUjwmw",
		authDomain: "react-todo-f2b6b.firebaseapp.com",
		databaseURL: "https://react-todo-f2b6b.firebaseio.com",
		projectId: "react-todo-f2b6b",
		storageBucket: "react-todo-f2b6b.appspot.com",
		messagingSenderId: "376195923977"
	};
	
	firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;