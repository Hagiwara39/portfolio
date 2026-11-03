# さくのポートフォリオ

UIUXデザイナー・デザインエンジニアを目指す、さくのポートフォリオサイトです。
「自己紹介」「作品」「連絡先」の3つのセクションで構成しています。

> **制作途中です。** 少しずつ改善を続けています。

## 公開URL

<https://saku-murayama-portfolio.vercel.app/>

## 使用技術

- React
- React Router（ページの切り替え）
- Vite
- JavaScript
- CSS（Flexbox / Grid / メディアクエリ）
- Supabase（データベース）

最初は素の HTML / CSS / JavaScript で作り、そのあと Vite + React で作り直しました。

## 工夫した点

### ダークモード
ヘッダーのボタンで、白い背景の「ライトモード」と黒っぽい背景の「ダークモード」を切り替えられます。
React の `useState` で「今ダークモードかどうか」を覚え、`body` にクラスを付け外しするだけにして、色の指定は CSS にまとめました。

### 作品の絞り込み
「すべて」「Web」「デザイン」「その他」のボタンで、作品をカテゴリごとに絞り込めます。
作品の情報は `src/data/works.js` にまとめているので、作品を増やすときはこのファイルに書き足すだけで済みます。

### 作品の詳細ページ
作品カードを押すと、`/works/作品の名前`（例: `/works/mcflow`）の詳細ページに移動します。
React Router で URL ごとに表示するページを切り替え、1つの詳細ページの部品で全作品を表示しています。
Vercel で詳細ページの URL を直接開いても404にならないように、`vercel.json` で設定しています。

### スマホ対応
メディアクエリで、画面が狭いときの文字の大きさや余白を調整しています。
作品カードは Grid の `auto-fill` で、画面の幅に合わせて列の数が自動で変わります。

### お問い合わせフォーム
連絡先のセクションにフォームを置き、送られた内容は Supabase の `messages` テーブルに保存しています。
RLS（行レベルセキュリティ）で「送信（insert）だけ許可・読むのは不可」にして、他の人のお問い合わせが見えないようにしました。
Supabase のキーは `.env.local` と Vercel の環境変数に置き、GitHub には上げていません。

## ファイル構成

```
index.html        … React を表示する土台の HTML
vercel.json       … Vercel の設定（詳細ページを直接開いても404にしない）
src/
  main.jsx        … React を画面に表示する入口
  App.jsx         … ページ全体の組み立て・URL によるページの切り替え・ダークモード
  style.css       … 見た目
  pages/          … ページ（URL ごとに表示するもの）
    HomePage.jsx  … トップページ（/）
    WorkDetailPage.jsx … 作品の詳細ページ（/works/作品の名前）
  components/     … 画面の部品（ヘッダー・自己紹介・作品・連絡先・フッター）
    ContactForm.jsx … お問い合わせフォーム
  data/works.js   … 作品の一覧データ
  lib/supabase.js … Supabase につなぐための設定
```

## 今後やる予定

- デザインの改善
- 作品の追加
- 作品の詳細ページの中身（課題・解決策・結果）を書く
- TypeScript 化
