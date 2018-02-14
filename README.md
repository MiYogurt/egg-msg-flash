# egg-msg-flash

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-msg-flash.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-msg-flash
[travis-image]: https://img.shields.io/travis/MiYogurt/egg-msg-flash.svg?style=flat-square
[travis-url]: https://travis-ci.org/MiYogurt/egg-msg-flash
[codecov-image]: https://img.shields.io/codecov/c/github/MiYogurt/egg-msg-flash.svg?style=flat-square
[codecov-url]: https://codecov.io/github/MiYogurt/egg-msg-flash?branch=master
[david-image]: https://img.shields.io/david/MiYogurt/egg-msg-flash.svg?style=flat-square
[david-url]: https://david-dm.org/MiYogurt/egg-msg-flash
[snyk-image]: https://snyk.io/test/npm/egg-msg-flash/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-msg-flash
[download-image]: https://img.shields.io/npm/dm/egg-msg-flash.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-msg-flash

<!--
Description here.
-->

## Install

```bash
$ npm i egg-msg-flash --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.flash = {
    enable: true,
    package: 'egg-msg-flash'
}
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.flash = {
    key: 'flash'
}
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

```
ctx.flash = {
    type: 'success',
    message: {
        some: 'one'
    }
}

// or

ctx.flash_success({some:'one'})

ctx.flash_error()
ctx.flash_info()
ctx.flash_warning()

ctx.request.flash(type, message)

// get message by

ctx.flash
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
