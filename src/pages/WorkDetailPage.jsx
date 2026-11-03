// useEffect は React に用意されている機能。使うために読み込む
import { useEffect } from 'react'
// useParams: URL の中の「:slug」の部分を読み取るための機能
// Link: ページを移動するためのリンク（React Router 版の a タグ）
import { useParams, Link } from 'react-router-dom'

// 作品の一覧データを読み込む
import works from '../data/works.js'

// WorkDetailPage: 作品の詳細ページ（URL が「/works/:slug」のときに表示する）
function WorkDetailPage() {
  // URL が /works/mcflow なら、slug には 'mcflow' が入る
  const { slug } = useParams()

  // find: 配列から「条件が true になった最初の1つ」を探して返す。見つからなければ undefined
  const work = works.find((item) => item.slug === slug)

  // ページを開いたとき（slug が変わったとき）に、画面を一番上までスクロールする
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // URL に合う作品がないとき（例: /works/abc）は、ここで終わりにする
  if (!work) {
    return (
      <section className="work-detail">
        <h1>作品が見つかりません</h1>
        <Link to="/">トップに戻る</Link>
      </section>
    )
  }

  return (
    <section className="work-detail">
      {/* 条件 && A は「条件が true のときだけ A を表示する」という書き方 */}
      {/* note がある作品だけ、最初に注意書きを出す */}
      {work.note && <p className="work-note">{work.note}</p>}

      {/* h1: このページで一番大きな見出し。詳細ページでは作品名にする */}
      <h1>{work.title}</h1>
      <p>{work.description}</p>

      {/* 中身はあとで書く。今は仮の文章 */}
      <h3>課題</h3>
      <p>（ここに課題を書きます）</p>

      <h3>解決策</h3>
      <p>（ここに解決策を書きます）</p>

      <h3>結果</h3>
      <p>（ここに結果を書きます）</p>

      {/* to="/" でトップページへ移動する */}
      <Link to="/">トップに戻る</Link>
    </section>
  )
}

export default WorkDetailPage
