#!/usr/bin/env node

const bangumiSearch = require('./bangumiSearch');
const prettyjson = require('prettyjson');

if (process.argv.length < 3) {
	console.log("No keywords specified");
	process.exit();
}

const results = bangumiSearch(process.argv[2]);
for (const r of results) {
	console.log(prettyjson.render(r), '\n');
}
