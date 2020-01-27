#!/usr/bin/env node

const bangumiSearch = require('./bangumiSearch');
const prettyjson = require('prettyjson');
const _ = require('lodash');

const argv = require('yargs')
	.usage('Usage: $0 <str> [options]')
	.help('h')
	.demandCommand(1)
	.default({
		number: 5
	})
	.boolean('title')
	.describe('title', 'Show titles only in results')
	.number('number')
	.describe('number', 'Limit the number of results. -1 for unlimited.')
	.alias('t', 'title')
	.alias('n', 'number')
	.alias('h', 'help')
	.alias('v', 'version')
	.argv;

const results = bangumiSearch(argv._[0]);
let count = 0;
results.forEach((result, index) => {
	if (argv.number > 0 && index >= argv.number)
		return;
	++count;
	if (argv.title)
		result = _.pick(result, ['title', 'titleTranslate']);
	console.log(`--- Result ${index + 1} ---\n${prettyjson.render(result)}\n`);
})

console.log(`${count} results showed. ${results.length} in total.`);
