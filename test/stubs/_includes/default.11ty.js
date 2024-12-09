export default ({ page, backlinks }) => {
	console.group(page.filePathStem);

	if (backlinks.length) {
		for (const b of backlinks) {
			console.dir(b);
		}
	} else {
		console.dir(null);
	}
	console.groupEnd();
};
