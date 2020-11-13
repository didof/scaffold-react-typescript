import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import setup, { abilitedFeatures } from './setup/setup';
export const utility = setup(abilitedFeatures);
ReactDOM.render(React.createElement(App, null), document.getElementById('root'), () => console.log('App successfully started'));
