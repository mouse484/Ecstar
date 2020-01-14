![image](https://user-images.githubusercontent.com/38714187/72132993-bb2ab900-33c3-11ea-9ddc-c3dd7feba787.png)

<p align="center">
  <img
    src="https://github.com/mouse484/Ecstar/workflows/ESLint/badge.svg"
    alt="ESLint badge"
  />
  <a href="https://www.npmjs.com/package/ecstar">
    <img src="https://img.shields.io/npm/v/ecstar" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/ecstar">
    <img src="https://img.shields.io/npm/dw/ecstar" alt="npm download" />
  </a>
    <a href="https://github.com/mouse484/Ecstar/stargazers">
    <img src="https://img.shields.io/github/stars/mouse484/Ecstar" alt="github starts">
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
    <a href="https://devtoken.rocks/package/ecstar">
    <img src="https://badge.devtoken.rocks/ecstar" alt="ecstar Dev Token" />
  </a>
</p>

<h1 align="center">Ecstar</h1>

## 📃Introduction

Ecstar is the easiest framework [Discord.js](https://github.com/discordjs/discord.js).

## 💬 Usage

### 📥install

- stable
  `npm install ecstar` or `yarn add ecstar`

- mastar
  `npm install mouse484/Ecstar#mastar` or `yarn add mouse484/Ecstar#mastar`

### 📁Directory Tree

```
Development Directory/
├ commands/
│ ├ command-type/
│ │ 　 ├ command-name.js(command file)
│ │ 　 └ command-name.js(command file)
| └ command-type/
|　 　  └ command-name.js(command file)
├ events/
│ └ event-name.js(event file)
└ index.js(main file)
```

### 📄Main File

```js main.js
import { Client } from 'ecstar';

const client = new Client({
  prefix: 'your prefix', //Required
  owner: 'your id',
});

client.login('Your token here');
```

### 📄Command File

```js
import { Command } from 'ecstar';

export = class extends Command {
  constructor(client) {
    super(client, {
      name: 'command name', //Required
      aliases: ['alias1', 'alias2'],
      ownerOnly: false; //or true
    });
  }

  run(message) {
    // What to do
  }
};
```

### 📄Event File

```js
import { Event } from 'ecstar';

export = class extends Event {
  constructor(client) {
    super(client, 'Receive event name');
  }

  run(/* callback here */) {
    // What to do
  }
};
```

## 🎫License

- [MIT](https://github.com/mouse484/Ecstar/blob/master/LICENSE)

## 👀Author

- [Twitter](https://twitter.com/mouse_484)
- [Discord](https://discord.gg/T4e5xbP)
