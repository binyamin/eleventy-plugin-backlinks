function caselessCompare(a, b) {
    return a.normalize().toLowerCase() === b.normalize().toLowerCase();
}

// This regex finds all wikilinks in a string
const wikilinkRegExp = /\[\[\s*([^\[\]\|\n\r]+)(\|[^\[\]\|\n\r]+)?\s*\]\]/g

module.exports = function (options) {
    return ({ collections, page }) => {
        const { notes } = collections;

        const fileStem = page.filePathStem.replace(`/${options.folder}/`, '');

        let backlinks = [];

        // Search the other notes for backlinks
        for (const otherNote of notes) {
            const noteContent = otherNote.template.frontMatter.content;

            // Get all links from otherNote
            const outboundLinks = (noteContent.match(wikilinkRegExp) || [])
                .map(link => (
                    // Extract link location
                    link.slice(2, -2)
                        .split("|")[0]
                        .replace(/\.(md|mkd|markdown|html|htm)\s*$/i, "")
                        .replace(`/${options.folder}/`, '')
                        .trim()
                ));

            // If the other note links here, return related info
            if (outboundLinks.some(link => caselessCompare(link, fileStem))) {
                backlinks.push(options.getData(otherNote));
            }
        }

        return backlinks;
    }
}
