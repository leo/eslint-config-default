# ESLint config

This is how I'm linting all of my projects. While this isn't an official standard (there isn't one), I strongly recommend this when it comes to the code styling of JavaScript projects.

## Setup

To use this config in combination with [ESLint](http://eslint.org), simply install the package...

```bash
npm install --save-dev eslint-config-default
```

...and add this to your [config file](http://eslint.org/docs/user-guide/configuring):

```json
{
  "extends": "default"
}
```

Boom! You're done.
