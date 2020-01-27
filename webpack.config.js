const path = require('path');

module.exports = {
	mode: "production",
	entry: "./bangumiSearch.js",
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
}