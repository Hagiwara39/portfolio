// useEffect は React に用意されている機能。使うために読み込む
import { useEffect } from 'react'
// useLocation: 今の URL の情報を読み取るための機能
import { useLocation } from 'react-router-dom'

// トップページの部品（コンポーネント）を components フォルダから読み込む
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Works from '../components/Works.jsx'
import Contact from '../components/Contact.jsx'

// HomePage: トップページ（URL が「/」のときに表示する）
// Hero（黒いカード）のあとに、自己紹介・作品・連絡先の3つのセクションを並べる
function HomePage() {
  // hash: URL の「#」から後ろの部分（/#works なら '#works'、/ なら ''）
  const { hash } = useLocation()

  // hash が変わるたびに、その id の場所までスクロールする
  // Link で移動したときは、ブラウザが自動で # の場所へ動いてくれないので、ここで動かす
  useEffect(() => {
    if (hash) {
      // hash.slice(1): 先頭の「#」を取る（'#works' → 'works'）
      const target = document.getElementById(hash.slice(1))
      // ?. は「target があるときだけ実行する」という書き方
      target?.scrollIntoView()
    } else {
      // # がないとき（「トップに戻る」で来たとき）は一番上へ
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <>
      <Hero />
      <About />
      <Works />
      <Contact />
    </>
  )
}

export default HomePage
