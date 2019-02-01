# modulegala-js

A simple way to alias a module in NodeJS.

[![Build Status](https://travis-ci.com/machi1990/modulegala-js.svg?branch=master)](https://travis-ci.com/machi1990/modulegala-js)

## Install

`npm`: run the command `npm install modulegala-js`

`yarn`: run the command `yarn add modulegala-js`

# Usage

Loads the module in the entrypoint file your application.

1. Adds modulegala configuration in your `package.json` file, like below.

```{
        "modulegala": {
            "@foo": "path-to-foo-source-folder",
            "@bar": "path-to-bar-source-folder"
        }
    }
```

- To register the aliasing system, copy the following line and paste it in your application's root file.
  `require('modulegala-js');`

### Contributor

1. Manyanda Chitimbo <manyanda.chitimbo@gmail.com>
