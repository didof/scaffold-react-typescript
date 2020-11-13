import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import setup, { abilitedFeatures } from './setup'

// import { buildSingleton } from './design_patterns/creational/Singleton';
// const routerSingleton = buildSingleton();
// console.log(routerSingleton);

setup(abilitedFeatures);
ReactDOM.render(<App />, document.getElementById('root'), () => console.log('App successfully started'));
