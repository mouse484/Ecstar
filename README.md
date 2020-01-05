# Ecstar

## Ecstar とは (What's Ecstar)

[Discord.js](https://github.com/discordjs/discord.js)のフレームワークです。

Discord.js で作るには大変な部分をこの"Ecstar"を使えば解消~~できるようにしたいです~~。

Framework of [discord.js](https://github.com/discordjs/discord.js).

~~We'd like to~~ Improve hard part at discord.js with this "Ecstar".

## 使い方 (How to use)

### インストール (Installation)

```
// npm
npm install ecstar

// yarn
yarn add ecstar
```

### フォルダ構成 (Directory Tree)

```md
Development Folder/
├ commands/
│ └ command-type/
│ 　 　 └ command-name.js(command file)
├ events/
│ └ event-name.js(event file)
└ index.js(main file)
```

### メインファイル (Main file)

```js main.js
const Ecstar = require('ecstar');

const client = new Ecstar.Client({
  prefix: 'your prefix', //Required
  owner: 'your id',
});

client.login('Your token here');
```

### コマンドファイル (Command file)

```js
const { Command } = require('ecstar');

module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: 'command name', //Required
      aliases: ['alias1', 'alias2'],
      ownerOnly: false; //or true
    });
  }

  run(message) {
    //実行する内容 (What to do)
  }
};
```

### イベントファイル(event file)

```js
const { Event } = require('ecstar');

module.exports = class extends Event {
  constructor(client) {
    super(client, '受け取るイベント名(Receive event name)');
  }

  run(/* callback here */) {
    //実行する内容 (What to do)
  }
};
```

## おわりに (In conclusion)

まだ作成中で問題しかないと思います。
問題や意見等は気軽に下記のどこかに送ってくれるとありがたいです。

We're still making and we think there are only problems.
Please feel free to send issues or opinions at following any of link:

[issue](https://github.com/mouse484/Ecstar/issues),[Twitter](https://twitter.com/mouse_484),[Discord サーバー](https://discord.gg/6EhyV5u)
