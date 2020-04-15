# eslint-plugin-force-interface-name

force interface name begin with Inter

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-force-interface-name`:

```
$ npm install eslint-plugin-force-interface-name --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-force-interface-name` globally.

## Usage

Add `force-interface-name` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "force-interface-name"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "force-interface-name/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





