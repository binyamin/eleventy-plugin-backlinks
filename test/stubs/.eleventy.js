const wikilinks = require('markdown-it-wikilinks');
const md = require('markdown-it');

module.exports = (eleventyConfig) => {
	eleventyConfig.addGlobalData('layout', 'default');

	const mdLib = md().use(wikilinks);

	eleventyConfig.setLibrary('md', mdLib);

	eleventyConfig.addPlugin(require('../../index.js'));

	return {
		markdownTemplateEngine: 'njk',
		dir: {
			input: 'stubs',
			layouts: '_layouts',
		},
	};
};
