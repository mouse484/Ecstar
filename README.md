![image](https://user-images.githubusercontent.com/38714187/72132993-bb2ab900-33c3-11ea-9ddc-c3dd7feba787.png)

<h1 align="center">Ecstar</h1>

<p align="center">
  <img
    src="https://github.com/mouse484/Ecstar/workflows/ESLint/badge.svg"
    alt="ESLint badge"
  />
  <a href="http://ecstar.js.org/">
    <img
      src="https://github.com/mouse484/Ecstar/workflows/document/badge.svg"
      alt="document badge"
    />
  </a>
  <a href="https://www.npmjs.com/package/ecstar">
    <img src="https://img.shields.io/npm/v/ecstar" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/ecstar">
    <img src="https://img.shields.io/npm/dw/ecstar" alt="npm download" />
  </a>
  <a href="https://github.com/mouse484/Ecstar/stargazers">
    <img
      src="https://img.shields.io/github/stars/mouse484/Ecstar"
      alt="github starts"
    />
  </a>
  <a href="https://github.com/mouse484/Ecstar/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/ecstar" alt="LICENC" />
  </a>
  <a href="https://github.com/discordjs/discord.js">
    <img
      src="https://img.shields.io/npm/dependency-version/ecstar/peer/discord.js"
      alt="discord.js version"
    />
  </a>
  <a href="https://discord.gg/T4e5xbP">
    <img
      src="https://img.shields.io/discord/443320971609374721"
      alt="discord"
    />
  </a>
  <a href="https://gitpod.io/#https://github.com/mouse484/Ecstar">
    <img
      src="https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod"
      alt="Gitpod Ready-to-Code"
    />
  </a>
</p>

## 📃Introduction

Ecstar is the easiest framework [Discord.js](https://github.com/discordjs/discord.js).

## 📖Document

https://ecstar.js.org

## 📥Installation

Install [Ecstar](https://www.npmjs.com/package/ecstar) using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

```
npm install ecstar
```

```
yarn add ecstar
```

## 💬Usage

### 📄Main File

`/index.js`

```js main.js
const { Client } = require('ecstar');

const client = new Client(options);

client.login('Your token here');
```
options: [EcstarOptions](https://ecstar.js.org/interfaces/_client_.ecstaroptions.html)


### 📄Command File

```js
const { Command } = require('ecstar');

module.exports = class extends Command {
  constructor(client) {
    super(client, options);
  }

  run(message) {
    // What to do
  }
};
```
options: [commandOptions](https://ecstar.js.org/modules/_command_base_.html#commandoptions)

### 📄Event File

```js
const { Event } = require('ecstar');

module.exports = class extends Event {
  constructor(client) {
    super(client, 'Receive event name');
  }

  run(/* callback here */) {
    // What to do
  }
};
```

### 📄Args File

```js
const { Args } = require('ecstar');

module.exports = class extends Args {
  constructor(client) {
    super(client, 'args name');
  }
  run(message){
    // What to do
  }
};

```

### 📄Lang File

```ts
const { Lang } = require('ecstar');

module.exports = class extends Lang {
   LOADING_COMMANDS = '';
   ...
};
```

See [Here](https://github.com/mouse484/Ecstar/tree/master/src/lang)

## 🎫License

- [MIT](https://github.com/mouse484/Ecstar/blob/master/LICENSE)

## 👀Author

- [Twitter](https://twitter.com/mouse_484)
- [Discord](https://discord.gg/T4e5xbP)
