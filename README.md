## Gulp main bower file concat+uglify  task
Use [main-bower-files](https://www.npmjs.com/package/main-bower-files) in a more gulp like way.

Use the bower.json file as the source and it will create a vinyl stream for each of the files main-bower-files return when parsing the bower.json.

Concat all main js bower files from {package} bower.json.

## Installation
```bash
$ npm install
$ bower install --save {package-name}
```

## Usage
```bash
$ gulp
```
or

```bash
$ gulp vendor
```

Added (gulp-notify) notification and (plumber) error message as I always use them anyway.

Go visit [main-bower-files](https://www.npmjs.com/package/main-bower-files) for more information about the options.