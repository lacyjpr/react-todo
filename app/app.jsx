//var React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';

import * as actions from 'actions';
import {configure} from 'configureStore';
import firebase from 'app/firebase/';
import router from 'app/router/';

var store = configure();

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(actions.login(user.uid));
		store.dispatch(actions.startAddTodos());
		browserHistory.push('/todos');
	} else {
		store.dispatch(actions.logout());
		browserHistory.push('/');
	}
});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		{router}
	</Provider>,
	document.getElementById('app')
);