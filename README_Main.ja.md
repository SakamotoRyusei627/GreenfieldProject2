![](img/2023-06-05-01-40-06.png)

# 【 GPTCooker🥘 ザマス について】

### 【Git 情報】

![GitHub repo size](https://img.shields.io/github/repo-size/SakamotoRyusei627/GreenfieldProject2)
![GitHub last commit](https://img.shields.io/github/last-commit/SakamotoRyusei627/GreenfieldProject2)
![GitHub top language](https://img.shields.io/github/languages/top/SakamotoRyusei627/GreenfieldProject2)
![GitHub language count](https://img.shields.io/github/languages/count/SakamotoRyusei627/GreenfieldProject2)

---

### 【使用アイテム】

<div>
<img src="https://img.shields.io/badge/-Javascript-F7DF1E.svg?logo=javascript&style=plastic">
<img src="https://img.shields.io/badge/-Typescript-007ACC.svg?logo=typescript&style=plastic">
<img src="https://img.shields.io/badge/-Css3-1572B6.svg?logo=css3&style=plastic">
<img src="https://img.shields.io/badge/-Html5-E34F26.svg?logo=html5&style=plastic">
<img src="https://img.shields.io/badge/-Postgresql-336791.svg?logo=postgresql&style=plastic">
<img src="https://img.shields.io/badge/-Postman-FF6C37.svg?logo=postman&style=plastic">
<img src="https://img.shields.io/badge/-React-61DAFB.svg?logo=react&style=plastic">
<img src="https://img.shields.io/badge/-Slack-4A154B.svg?logo=slack&style=plastic">
<img src="https://img.shields.io/badge/-Node.js-339933.svg?logo=node.js&style=plastic">
<img src="https://img.shields.io/badge/-Nodemon-76D04B.svg?logo=nodemon&style=plastic">
<img src="https://img.shields.io/badge/-Npm-CB3837.svg?logo=npm&style=plastic">
</div>

<hr>

## 🥘 システム概要

このシステムは「栄養バランス提案（献立提案）」を行います。

### 🥘 背景

下記内容からこのシステムを作成するプロジェクトが開始しました。

- **【困りごと】** 毎日、「メニューを考えるのが大変」でこんな困りごとありませんか？
  - 限られた材料で作らないといけない
  - 被らない料理を作らないといけない
- **【欲しいシステム】** 簡単＆かぶらない献立提案・食材管理（ムダにしない）

**_使用 URL_**

実際のシステム[「GPTCooker🥘 ザマス」](https://vermouth.onrender.com/)はこちらになります。

## 🥘 機能

- 食材を登録
- 数量や賞味期限管理
- 指定した食材から**自動で献立**を 3 つ提案
- 過去の献立リストを一覧表示

## 🥘 アーキテクチャー

※<font color="Red">赤文字部</font>：作成済　　<font color="blue">青文字部</font>：未作成
![](img/2023-06-05-01-51-15.png)

## プログラム構成

※<font color="Red">赤文字部</font>：作成済　　<font color="blue">青文字部</font>：未作成
![](img/2023-06-05-01-58-50.png)

## スキーマ

![](img/2023-06-05-01-57-31.png)

## 使用環境

- macOS
- node.js
- PostgreSQL

## 🥘 必要要件

- 🔑 Chat GPT の API キーを取得し、.env に設定

## 🥘 使い方

1. ライブラリを `npm i` でインストールしてください。
2. その他起動方法は、[React のドキュメント](/README_Install.ja.md)を参照してください。

## 🥘 インストール

```
$ git clone https://github.com/〜〜
$ cd 〜〜
```

## 🥘 テスト

1. 追加中

## 🥘 デプロイ

1. とくになし

## 🥘 その他

ユーモアのある料理を提案してくれるのでぜひ使ってみてください。

## 🥘 作者

- Team1（萩 巧実、森﨑 陽平、坂本 龍征、皿井 進）
- Team2（久場 智宏、田邊 諒人、菊地 慧、宮城 恒太郎）

## 🥘 今後の計画

- [ ] ログイン画面
- [ ] 数量計算
- [ ] 賞味期限が近づいたら通知
- [ ] 食べたいものから足りない食材を提案
- [ ] お気に入り登録
