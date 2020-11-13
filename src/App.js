import React from 'react';
import './assets/styles/index.css';
import './assets/styles/opacity.module.css';
import './assets/styles/cursor.module.css';
import Image from './components/Image';
import { utility } from './index';
import Singleton from './design_patterns/creational/Singleton';
export default () => {
    var _a;
    const i1 = (_a = utility.patterns) === null || _a === void 0 ? void 0 : _a.singleton;
    const i2 = Singleton.getInstance();
    console.log(i1);
    console.log(i2);
    console.log(i1 === i2);
    return (React.createElement("div", null,
        React.createElement("h1", null, "Stay safe, Fellas!"),
        React.createElement(Image, null)));
};
