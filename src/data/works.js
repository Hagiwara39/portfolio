// 作品の一覧データ
// [ ] は配列（順番つきのリスト）、{ } はオブジェクト（名前つきの情報のまとまり）
// 作品を増やすときは、ここに { } を1つ書き足すだけでよい
const works = [
  {
    // id: 作品ごとにちがう番号。React が「どのカードか」を見分けるのに使う
    id: 1,
    // title: 作品のタイトル（カードの h3 に入る）
    title: 'ポートフォリオサイト',
    // description: 作品の説明（カードの p に入る）
    description: '最初は素のHTML/CSS/JSで作り、Vite + Reactで作り直しました。',
    // category: 作品のカテゴリ（"web" / "design" / "other"）。ステップ8の絞り込みで使う
    category: 'web',
  },
  {
    id: 2,
    title: 'カフェのWebサイト（ダミー）',
    description: '架空のカフェの紹介サイト。Web カテゴリの例です。',
    category: 'web',
  },
  {
    id: 3,
    title: 'アプリのUIデザイン（ダミー）',
    description: '家計簿アプリの画面デザイン。デザイン カテゴリの例です。',
    category: 'design',
  },
  {
    id: 4,
    title: '写真作品（ダミー）',
    description: '街の風景を撮った写真。その他 カテゴリの例です。',
    category: 'other',
  },

]

// 他のファイル（Works.jsx）から works を使えるようにする
export default works
