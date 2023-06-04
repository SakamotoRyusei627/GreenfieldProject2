# 【React】

# 目次

<details>

<summary>目次一覧</summary>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Create React App を使用したはじめ方](#create-react-app-%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%9F%E3%81%AF%E3%81%98%E3%82%81%E6%96%B9)
- [使用可能なスクリプト](#%E4%BD%BF%E7%94%A8%E5%8F%AF%E8%83%BD%E3%81%AA%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`npm run eject`](#npm-run-eject)
- [もっと詳しく知る](#%E3%82%82%E3%81%A3%E3%81%A8%E8%A9%B3%E3%81%97%E3%81%8F%E7%9F%A5%E3%82%8B)
  - [コードの分割](#%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E5%88%86%E5%89%B2)
  - [バンドルサイズの分析](#%E3%83%90%E3%83%B3%E3%83%89%E3%83%AB%E3%82%B5%E3%82%A4%E3%82%BA%E3%81%AE%E5%88%86%E6%9E%90)
  - [プログレッシブウェブアプリの作成](#%E3%83%97%E3%83%AD%E3%82%B0%E3%83%AC%E3%83%83%E3%82%B7%E3%83%96%E3%82%A6%E3%82%A7%E3%83%96%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E4%BD%9C%E6%88%90)
  - [高度な設定](#%E9%AB%98%E5%BA%A6%E3%81%AA%E8%A8%AD%E5%AE%9A)
  - [デプロイ](#%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4)
  - [`npm run build`の圧縮に失敗する場合](#npm-run-build%E3%81%AE%E5%9C%A7%E7%B8%AE%E3%81%AB%E5%A4%B1%E6%95%97%E3%81%99%E3%82%8B%E5%A0%B4%E5%90%88)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

</details>

## Create React App を使用したはじめ方

このプロジェクトは、[Create React App](https://github.com/facebook/create-react-app)を使用して作成されました。

## 使用可能なスクリプト

プロジェクトディレクトリ内で、以下のコマンドを実行できます

### `npm start`

開発モードでアプリを実行します。\
ブラウザで [http://localhost:3000](http://localhost:3000) を開いて表示します。

変更を行うとページがリロードされます。\
コンソールには lint エラーが表示される場合もあります。

### `npm test`

対話型ウォッチモードでテストランナーを起動します。\
詳細については、[テストの実行](https://facebook.github.io/create-react-app/docs/running-tests)のセクションを参照してください。

### `npm run build`

アプリを本番用にビルドし、`build` フォルダーにバンドルします。\
React が本番モードで正しくバンドルされ、最適化されます。

ビルドは最小化され、ファイル名にはハッシュが含まれます。\
これにより、アプリがデプロイできる状態になります。

詳細については、[デプロイ](https://facebook.github.io/create-react-app/docs/deployment)のセクションを参照してください。

### `npm run eject`

**注意: これは一方向の操作です。`eject`を実行すると元に戻すことはできません！**

ビルドツールと構成の選択に満足していない場合、いつでも`eject`できます。このコマンドは、プロジェクトから単一のビルド依存関係を削除します。

その代わりに、すべての構成ファイルと推移的な依存関係（webpack、Babel、ESLint など）をプロジェクトに直接コピーします。これにより、それらを完全に制御できます。`eject`以外のすべてのコマンドは引き続き動作しますが、それらはコピーされたスクリプトを参照するようになるため、調整できます。この時点で、あなたは自己責任です。

`eject`を必ず使用する必要はありません。適切に機能セットは、小規模および中規模の展開に適しており、準備ができたらカスタマイズする必要はありません。

## もっと詳しく知る

[Create React App のドキュメント](https://facebook.github.io/create-react-app/docs/getting-started)でさらに学ぶことができます。

React の学習には、[React のドキュメント](https://reactjs.org/)を参照してください。

### コードの分割

このセクションはこちらに移動しました: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### バンドルサイズの分析

このセクションはこちらに移動しました: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### プログレッシブウェブアプリの作成

このセクションはこちらに移動しました: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### 高度な設定

このセクションはこちらに移動しました: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### デプロイ

このセクションはこちらに移動しました: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build`の圧縮に失敗する場合

このセクションはこちらに移動しました: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
