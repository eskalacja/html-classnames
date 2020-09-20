# HTML JS ClassNames helper
![npm](https://img.shields.io/npm/v/html-classnames) ![npm bundle size](https://img.shields.io/bundlephobia/min/html-classnames)

## Simple, no-dependency helper for building BEM html classes.
Simple module, and simple readme.

## How to use it?
Signature is as follows
```js
/**
 * @param {string} baseName
 * @param {Object<string, boolean>} extras
 * @return {string}
*/
className(baseName, extras = {});
```

Example usage
```js
const classNames = require('html-classnames');

const isBig = true;
const isLong = false;
const names = classNames('some-class', {
    '--is-big': isBig,
    '--is-long': isLong, 
});

console.log(names); // "some-class some-class--is-big"
```

## How to install?
```
npm install html-classnames
```

or 

```
yarn add html-classnames
```

## Changelog
This repository is using [semantic-release](http://semantic-release.gitbook.io), so you can find nice changeglog in the [CHANGELOG](./CHANGELOG.md) file.

## Contributing
All contributions welcome. Feel free to start new issue or even create a PR right away!
