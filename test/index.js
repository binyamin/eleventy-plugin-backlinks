import assert from 'node:assert/strict';
import path from 'node:path';
import Eleventy from '@11ty/eleventy';

import mod from '../src/index.js';

const root = (...rest) =>
	path.join(path.relative('.', import.meta.dirname), ...rest);

const elev = new Eleventy(root('stubs'), root('out'), {
	quietMode: true,
	config(e) {
		e.addPlugin(mod);
		e.dataFilterSelectors.add('backlinks');
	},
});

const results = await elev.toJSON();
const expected = {
	a: [{ url: '/notes/b/', title: undefined }],
	b: [
		{
			url: '/notes/a/',
			title: 'Note A',
		},
	],
	c: [],
};

assert.equal(results.length, 3);

for (const page of results) {
	const key = path.basename(page.url);
	assert.deepEqual(page.data.backlinks, expected[key]);
}

console.log('Tests passed!');
