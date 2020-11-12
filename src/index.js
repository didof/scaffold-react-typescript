import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const element = document.getElementById('root');

function onceStarted() {
	console.log('App successfully started');
}

ReactDOM.render(<App />, element, onceStarted);
