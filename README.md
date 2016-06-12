# ESLint config [![Build Status](https://travis-ci.org/leo/eslint-config-default.svg?branch=master)](https://travis-ci.org/leo/eslint-config-default)

This is how I'm linting all of my projects. While this isn't an official standard (there isn't one), I strongly recommend this when it comes to the code styling of JavaScript projects.

## Setup

To use this config in combination with [ESLint](http://eslint.org), simply install the package...

```bash
npm i --save-dev eslint-config-default
```

...and add this to your `package.json`:

```json
"eslintConfig": {
  "extends": "default"
}
```

Boom! You're done.
