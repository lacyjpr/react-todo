import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

export var configure = (initalState = {}) => {
	var reducer = redux.combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer
	});

	// var store = redux.createStore(reducer, redux.compose(
	// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	// ));
	var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
	var enhancer = composeEnhancers(
		redux.applyMiddleware(thunk)
	);
	var store = redux.createStore(reducer, initalState, enhancer);

	return store;
};