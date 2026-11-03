// トップページの部品（コンポーネント）を components フォルダから読み込む
import About from '../components/About.jsx'
import Works from '../components/Works.jsx'
import Contact from '../components/Contact.jsx'

// HomePage: トップページ（URL が「/」のときに表示する）
// 自己紹介・作品・連絡先の3つのセクションを並べる
function HomePage() {
  return (
    <>
      <About />
      <Works />
      <Contact />
    </>
  )
}

export default HomePage
