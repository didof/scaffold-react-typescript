import React from 'react';
import './assets/styles/index.css';
import './assets/styles/opacity.module.css';
import './assets/styles/cursor.module.css';

import Image from './components/Image';

import { utility } from './index';
import Singleton from './design_patterns/creational/Singleton';

export default () => {

	const i1 = utility.patterns?.singleton;
	const i2 = Singleton.getInstance();

	console.log(i1);
	console.log(i2);
	console.log(i1 === i2);

	return (
		<div>
			<h1>Stay safe, Fellas!</h1>
			<Image />
		</div>
	);
};
