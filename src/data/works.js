// 作品の一覧データ
// [ ] は配列（順番つきのリスト）、{ } はオブジェクト（名前つきの情報のまとまり）
// 作品を増やすときは、ここに { } を1つ書き足すだけでよい
const works = [
  {
    // id: 作品ごとにちがう番号。React が「どのカードか」を見分けるのに使う
    id: 1,
    // slug: URL に使う作品の名前（/works/portfolio の portfolio の部分）
    // 英小文字・数字・ハイフンだけで、作品ごとにちがう名前にする
    slug: 'portfolio',
    // title: 作品のタイトル（カードの h3 に入る）
    title: 'ポートフォリオサイト',
    // description: 作品の説明（カードの p に入る）
    description: '最初は素のHTML/CSS/JSで作り、Vite + Reactで作り直しました。',
    // category: 作品のカテゴリ（"web" / "design" / "other"）。ステップ8の絞り込みで使う
    category: 'web',
  },
  {
    id: 2,
    slug: 'mcflow',
    title: 'McFlow',
    description: 'マクドナルドのモバイルオーダーの非公式の改善提案（学生の制作）。いつものメニューを事前に登録して、注文までの操作を13回から5回に減らしました。',
    category: 'design',
  },
]

// 他のファイル（Works.jsx）から works を使えるようにする
export default works
