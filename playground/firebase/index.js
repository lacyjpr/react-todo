import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyBXUHD1LiZ7MBqMNR6q0aVtnYTvCVUjwmw",
	authDomain: "react-todo-f2b6b.firebaseapp.com",
	databaseURL: "https://react-todo-f2b6b.firebaseio.com",
	projectId: "react-todo-f2b6b",
	storageBucket: "react-todo-f2b6b.appspot.com",
	messagingSenderId: "376195923977"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
	app: {
		name: 'Todo App',
		version: '1.0.0'
	},
	isRunning: true,
	user: {
		name: 'JP',
		age: 25
	}
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
	console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
	text: 'run'
});

todosRef.push({
	text: 'walk'
});

// var notesRef = firebaseRef.child('notes');

// notesRef.on('child_added', (snapshot) => {
// 	console.log('child_added', snapshot.key, snapshot.val());
// });

// notesRef.on('child_changed', (snapshot) => {
// 	console.log('child_changed', snapshot.key, snapshot.val());
// });

// notesRef.on('child_removed', (snapshot) => {
// 	console.log('child_removed', snapshot.key, snapshot.val());
// });

// var newNoteRef = notesRef.push({
// 	text: 'Walk the dog!'
// });
// console.log('Todo id', newNoteRef.key);

// firebaseRef.child('user').on('value', (snapshot) => {
// 	console.log('User ref changed', snapshot.val());
// });

// firebaseRef.child('user').update({name: 'Mike'});

// firebaseRef.child('app').update({name: 'Something Else!'});

// var logData = (snapshot) => {
// 	console.log('Got value', snapshot.val());
// };

// firebaseRef.on('value', logData);

// firebaseRef.off(logData);

// firebaseRef.update({isRunning: false});

// firebaseRef.child('app').once('value').then((snapshot) => {
// 	console.log('got entire database', snapshot.key, snapshot.val());
// }, (e) => {
// 	console.log('Unable to fetch value', e);
// });

// firebaseRef.update({
// 	'app/name': 'ToDo App',
// 	'user/name': 'Jean-Paul'
// });

// firebaseRef.child('app').update({
// 	name: 'Todo Application'
// });

// firebaseRef.child('user').update({
// 	name: 'JP'
// });

//firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
// 	version: '2.0',
// 	name: null
// });

// firebaseRef.update({
// 	isRunning: null
// });

// firebaseRef.child('user/age').remove();
