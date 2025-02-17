{
  "name": "erddap-parser",
  "version": "0.0.1",
  "description": "{DESCRIPTION}",
  "keywords": [
    "d3",
    "d3-module"
  ],
  "license": "BSD-3-Clause",
  "main": "build/erddap-parser.js",
  "jsnext:main": "index",
  "homepage": "https://github.com/akbstone/erddap-parser",
  "repository": {
    "type": "git",
    "url": "https://github.com/akbstone/erddap-parser"
  },
  "scripts": {
    "build": "rm -rf build && mkdir build && rollup -c",
    "pretest": "npm run build",
    "test": "tape test/**/*-test.js | tap-summary",
    "prepare": "npm run test && uglifyjs build/erddap-parser.js -c -m -o build/erddap-parser.min.js",
    "postpublish": "zip -j build/erddap-parser.zip -- LICENSE README.md build/erddap-parser.js build/erddap-parser.min.js"
  },
  "devDependencies": {
    "rollup": "1.1.0",
    "rollup-plugin-node-resolve": "^4.2.3",
    "tap-summary": "^4.0.0",
    "tape": "4.11.0",
    "uglify-js": "3.5.4"
  },
  "dependencies": {

  }
}
