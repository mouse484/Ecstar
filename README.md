# Ecstar
I'm not good at English. Please wait for an explanation in English.

## Ecstarとは
[Discord.js](https://github.com/discordjs/discord.js)のフレームワークです。
Discord.jsで作るには大変な部分をこの"Ecstar"を使えば解消~~できるようにしたいです~~。

## 使い方

### インストール
```
npm i mouse484/Ecstar#master
```
### フォルダ構成
```md
開発フォルダ/
　├ commands/
　│　  └ カテゴリー名(英語)/
　│　　　└ コマンドファイル(下記)
　└ メインファイル(下記)

```
### メインファイル
```js main.js
const Ecstar = require("ecstar");

const client = new Ecstar.client({
    prefix: "!",
    command: `${__dirname}/commands`,
    log: true,
});

client.login("TOKEN");
```

### コマンドファイル
```js
const { command } = require("ecstar");

module.exports = class extends command {
    constructor(client) {
        super(client, {
            name: "コマンド名",
        });
    }
    run(message) {
        //実行する内容
    }
};
```

## おわりに
まだ作成中で問題しかないと思います。  
問題や意見等は気軽に下記のどこかに送ってくれるとありがたいです。  

[issue](https://github.com/mouse484/Ecstar/issues),[Twitter](https://twitter.com/Esc_mouse_484),[Discordサーバー](https://discord.gg/6EhyV5u)