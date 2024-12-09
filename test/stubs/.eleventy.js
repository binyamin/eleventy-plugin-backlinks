import md from 'markdown-it';
import wikilinks from 'markdown-it-wikilinks';

import mod from '../../index.js';

export default async (eleventyConfig) => {
	eleventyConfig.addGlobalData('layout', 'default');

	const mdLib = md().use(wikilinks);

	eleventyConfig.setLibrary('md', mdLib);

	eleventyConfig.addPlugin(mod);

	return {
		markdownTemplateEngine: 'njk',
		dir: {
			layouts: '_layouts',
		},
	};
};
