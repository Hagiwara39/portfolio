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
        {/* サムネイル用の枠。今は仮の色だけ。あとで画像に入れかえる */}
        {/* aria-hidden="true": 中身のない飾りなので、読み上げソフトに無視させる */}
        <div className="work-thumb" aria-hidden="true"></div>

        {/* 文字の部分をまとめる箱。サムネイルは端まで広げ、文字のまわりにだけ余白を付けるために分ける */}
        <div className="work-card-body">
          {/* { } の中は JavaScript。受け取った title をここに表示する */}
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </article>
  )
}

export default WorkCard
