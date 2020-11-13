import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import setup, { abilitedFeatures, activatedFeatures } from './setup/setup'

export const utility: activatedFeatures = setup(abilitedFeatures);
ReactDOM.render(<App />, document.getElementById('root'), () => console.log('App successfully started'));
