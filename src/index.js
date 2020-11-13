import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import setup, { abilitedFeatures } from './setup';
// import { buildSingleton } from './design_patterns/creational/Singleton';
// const routerSingleton = buildSingleton();
// console.log(routerSingleton);
setup(abilitedFeatures);
ReactDOM.render(React.createElement(App, null), document.getElementById('root'), function () { return console.log('App successfully started'); });
