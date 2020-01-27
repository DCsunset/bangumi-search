# bangumi-search

[![npm](https://img.shields.io/npm/v/bangumi-search.svg)](https://www.npmjs.com/package/bangumi-search)
[![GitHub](https://img.shields.io/github/license/DCsunset/bangumi-search.svg)](https://github.com/DCsunset/bangumi-search/blob/master/LICENSE)


It is a cli and library wrapper for [bangumi-data](https://github.com/bangumi-data/bangumi-data),
used for searching anime names in the database.

## Install

For command line:

```
npm install -g bangumi-search
```

To use as a library:

```
npm install bangumi-search
```

## Usage

### Command line

```
Usage: bangumi-search <str> [options]

Options:
  -h, --help     Show help                                             [boolean]
  -t, --title    Show titles only in results                           [boolean]
  -n, --number   Limit the number of results. -1 for unlimited. [number] [default: 5]
  -v, --version  Show version number                                   [boolean]
```

Since the titles in the database are mainly in
Japanese, English and Chinese,
these languages can be used to search.

### Library

Use the exported search function:

```js
const bangumiSearch = require('bangumi-search');
const results = bangumiSearch('keyword');
```


## Develop

Clone this repository, and then run:

```
npm install
node index.js <str>
```

## License

MIT License
