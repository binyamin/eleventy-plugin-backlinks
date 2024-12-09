import path from 'node:path';
import Eleventy from '@11ty/eleventy';

import mod from '../index.js';

const root = (...rest) => path.join(import.meta.dirname, ...rest);

const elev = new Eleventy(root('stubs'), root('out'), {
	quietMode: true,
	config(e) {
		e.addGlobalData('layout', 'default');
		e.addPlugin(mod);
	},
});

await elev.toJSON();
