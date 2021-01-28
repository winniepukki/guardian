# Winniepukki Guardian

![GitHub package.json version](https://img.shields.io/github/package-json/v/winniepukki/guardian)

## Installation
1. Ensure that you have ESLint installed [ESLint](http://eslint.org):

```bash
npm i eslint --save-dev
```

2. Install the package itself
```bash
npm i -D eslint-config-winniepukki-guardian
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-config-winniepukki-guardian` globally.

## Usage

Add the following code to your `package.json`
```json
"eslintConfig": {
    "extends": "winniepukki-guardian"
},
```