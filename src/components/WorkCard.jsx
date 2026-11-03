// Link: ページを移動するためのリンク（React Router 版の a タグ）
import { Link } from 'react-router-dom'

// WorkCard: 作品カード1枚分
// { slug, title, description } は、使う側（Works.jsx）から渡された値（props）を受け取る場所
function WorkCard({ slug, title, description }) {
  return (
    // article: それだけで意味が完結する内容（ここでは作品1つ分）
    <article>
      {/* カードの中身を Link で包むと、カードのどこを押しても詳細ページへ移動する */}
      {/* `/works/${slug}` は「文字の中に変数を埋め込む」書き方（テンプレート文字列） */}
      {/* slug が 'mcflow' なら '/works/mcflow' になる */}
      <Link to={`/works/${slug}`}>
        {/* { } の中は JavaScript。受け取った title をここに表示する */}
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </article>
  )
}

export default WorkCard
