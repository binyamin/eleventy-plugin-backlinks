const path = require('node:path');
const Eleventy = require('@11ty/eleventy');

const elev = new Eleventy(
	path.join(__dirname, './stubs'),
	path.join(__dirname, './out'),
	{
		quietMode: true,
		configPath: path.join(__dirname, 'stubs', '.eleventy.js'),
	},
);

elev.toJSON()
	.then((data) => {
		// console.log('[test]', data);
	})
	.catch((e) => {
		throw e;
	});
