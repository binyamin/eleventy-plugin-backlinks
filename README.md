# Eleventy-Plugin Backlinks
Collect and display backlinks from your notes.

[![NPM version badge](https://badgen.net/npm/v/eleventy-plugin-backlinks)](https://www.npmjs.com/package/eleventy-plugin-backlinks)

> Note: I'm not building this project for myself, so y'all gotta tell me what you think. Issues are the way to go here.


## Usage
Add the plugin to your eleventy config, like so:
```js
const eleventyBacklinks = require("eleventy-plugin-backlinks");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyBacklinks, {
		folder: '/notes' // The folder with your notes
    });
}
```

For every page in the given folder, you get a `backlinks` variable. By default, it contains an array, with the title (if set) and the url of each page.


### Options
- **folder** (`string`) - The name of a folder which contains your notes. The default folder-name is "notes".
- **getData** (`function`) - Optionally, control which data will be passed to `backlinks`. The function receives a [collection item](https://www.11ty.dev/docs/collections/#collection-item-data-structure), and is called for every relevant page.


## Contributing
All input is welcome; feel free to [open an issue](https://github.com/binyamin/eleventy-plugin-backlinks/issues/new). Please remember to be a [mensch](https://www.merriam-webster.com/dictionary/mensch). If you want to program, you can browse [the issue list](https://github.com/binyamin/eleventy-plugin-backlinks/issues).


## Legal
All source-code is provided under the terms of [the MIT license](https://github.com/binyamin/eleventy-plugin-backlinks/blob/main/LICENSE). Copyright 2022 Binyamin Aron Green.
