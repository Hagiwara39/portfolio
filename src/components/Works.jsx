// 作品の一覧データと、カード1枚分の部品を読み込む
import works from '../data/works.js'
import WorkCard from './WorkCard.jsx'

// Works: 作品セクション（絞り込みボタンと作品カード）
function Works() {
  return (
    // 作品セクション
    // 注意: CSS の Grid は「#works の直下」の要素を並べるので、カードを余計な div で囲まない
    <section id="works">
      <h2>作品</h2>

      {/* div: 意味を持たないただの箱。ここでは絞り込みボタンをまとめるために使う */}
      {/* JSX では class ではなく className と書く */}
      <div className="filter">
        {/* data-filter: 「このボタンはどのカテゴリを表示するか」を書いておく自作のメモ欄 */}
        {/* className="is-active" は「今選ばれているボタン」の目印。最初は「すべて」 */}
        <button type="button" className="is-active" data-filter="all">すべて</button>
        <button type="button" data-filter="web">Web</button>
        <button type="button" data-filter="design">デザイン</button>
        <button type="button" data-filter="other">その他</button>
      </div>

      {/* works の作品を1つずつ取り出して、WorkCard（カード1枚）に変えて並べる */}
      {/* key: React がカードを見分けるための目印。作品ごとにちがう id を渡す */}
      {works.map((work) => (
        <WorkCard
          key={work.id}
          title={work.title}
          description={work.description}
        />
      ))}
    </section>
  )
}

export default Works
