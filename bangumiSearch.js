const bangumiData = require('bangumi-data');
const searchFields = [
	['title'],
	['titleTranslate', 'zh-Hans'],
	['titleTranslate', 'zh-Hant'],
	['titleTranslate', 'en']
];

function contentSearch(content, str) {
	if (Array.isArray(content)) {
		for (const c of content) {
			if (contentSearch(c, str))
				return true;
		}
		return false;
	}
	else if (typeof content === 'string')
		return content.toLowerCase().includes(str.toLowerCase());
	else
		return false;
}

function bangumiSearch(str) {
	const results = [];
	for (let item of bangumiData.items) {
		for (const field of searchFields) {
			let searchable = true;
			let content = item;
			for (const property of field) {
				content = content[property];
				if (!content) {
					searchable = false;
					break;
				}
			}
			if (!searchable)
				continue;
			if (contentSearch(content, str)) {
				results.push(item);
				break;
			}
		}
	}
	return results;
};

module.exports = bangumiSearch;
