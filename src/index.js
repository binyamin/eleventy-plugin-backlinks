import backlinks from './get-backlinks.js';
import getExistingData from './get-existing-data.js';

/**
 * @param eleventy
 * @param {object} [options]
 * @param {string} [options.folder] Root folder with your notes (default: 'notes')
 * @param {(note: any) => Record<string, unknown>} [options.getData] Get
 * and return the data you want passed into `backlinks`
 */
function BacklinksPlugin(eleventy, options = {}) {
	options.folder ??= 'notes';
	options.getData ??= (note) => ({
		url: note.url,
		title: note.data.title,
	});

	// Remove leading or trailing slash from `options.folder`
	options.folder = options.folder.replace(/^\/?(.+)\/?$/, '$1');

	function isNoteFile(url) {
		return url.startsWith(`/${options.folder}/`);
	}

	eleventy.addCollection('notes', (collection) => {
		return collection.getAll().filter((t) => isNoteFile(t.filePathStem));
	});

	eleventy.addGlobalData('eleventyComputed', {
		// Don't overwrite any existing global computed data
		...getExistingData(eleventy.globalData).eleventyComputed,
		backlinks(data) {
			if (isNoteFile(data.page.filePathStem) === false) return;

			return backlinks(options)(data);
		},
	});
}

export default BacklinksPlugin;
