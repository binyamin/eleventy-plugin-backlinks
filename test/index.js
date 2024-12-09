import path from 'node:path';
import Eleventy from '@11ty/eleventy';

const root = (...rest) => path.join(import.meta.dirname, ...rest);

const elev = new Eleventy(root('stubs'), root('out'), {
	quietMode: true,
	configPath: root('stubs', '.eleventy.js'),
});

await elev.toJSON();
