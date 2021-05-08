import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import {
	createStore,
	applyMiddleware,
	combineReducers,
} from 'redux';
import {
	searchRobots,
	requestRobots,
} from './reducer';
import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import reportWebVitals from './reportWebVitals';

const logger = createLogger();
const rootReducer = combineReducers({
	searchRobots,
	requestRobots,
});
const store = createStore(
	rootReducer,
	applyMiddleware(ThunkMiddleware, logger)
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
