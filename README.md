# BodyMovin Test


#### Requires:

* NodeJs
* Gulp

## Installation

```sh
 git clone https://github.com/iondrimba/es6-blank.git
 cd es6-blank
 npm install
 gulp
```

#### GOAL:
Quick start ES6 template.


#### Features:

* ES6 ready
* SemVer (Automated package and files versioning)
* Tests (Jasmine + karma)
* Coverage (Coveralls)
* CI (Travis)
* Module system CommonJs (browserify)

#### Testing:

* $ npm test

#### Includes:

* ES6 transpile via Babel
* BrowserSync
* Browserify
* Karma
* SemVer
* Jasmine
* Code Coverage
* Sass
* ESLint
* Scss Lint (Requires Ruby and [scss-lint])
* Imagemin (images optimization)
* Uglify
* Watch
* Html-Min
* Post-Css (autoprefixer)

####Gulp Tasks:

* gulp (default)
* gulp deploy (run tasks without browser-sync and watch)
* gulp optimize (run optimization tasks)
* gulp bump-patch / minor / major (update files with version number)

####Semantic Versioning:

The bump-versions tasks should be executed after your deploy and optimize task.
The task will:

1. Rename the file app.js to app.version.js
2. Rename the file app.css to app.version.css
3. Will update the index.html with the new file references.

[scss-lint]:<https://github.com/brigade/scss-lint#installation>
[Live demo]:<http://iondrimba.github.io/es6-blank/>
