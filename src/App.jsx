// useState と useEffect は React に用意されている機能。使うために読み込む
import { useState, useEffect } from 'react'
// Routes と Route: URL によって表示するページを切り替えるための部品
import { Routes, Route } from 'react-router-dom'

// 部品（コンポーネント）を components フォルダから読み込む
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

// ページを pages フォルダから読み込む
import HomePage from './pages/HomePage.jsx'
import WorkDetailPage from './pages/WorkDetailPage.jsx'

// App: ページ全体を組み立てる部品（コンポーネント）
// ヘッダーとフッターはどのページでも共通。真ん中（main）だけを URL で切り替える
function App() {
  // isDark: 今ダークモードかどうか（true / false）を覚えておく「状態」
  // setIsDark: isDark を書き換えるための関数
  // useState(false) の false は最初の値。最初はライトモード
  const [isDark, setIsDark] = useState(false)

  // isDark が変わるたびに、{ } の中を実行する
  // body は React の箱（#root）の外にあるので、ここで直接 class を付け外しする
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDark])

  // ボタンが押されたときの処理: isDark を反対（true ⇔ false）にする
  function toggleTheme() {
    setIsDark(!isDark)
  }

  // return の ( ) の中に書いたものが画面に表示される
  // <> と </> は「画面には何も出ない、まとめるためだけの箱」（フラグメント）
  return (
    <>
      {/* Header に「今ダークモードか」と「押されたときの処理」を渡す */}
      <Header isDark={isDark} onToggleTheme={toggleTheme} />

      {/* main: このページのメインの内容。1ページに1つだけ使う */}
      <main>
        {/* Routes: 中の Route のうち、今の URL に合うものを1つだけ表示する */}
        <Routes>
          {/* path="/" のとき（トップ）は HomePage を表示する */}
          <Route path="/" element={<HomePage />} />
          {/* :slug は「ここには作品ごとにちがう名前が入る」という目印 */}
          {/* /works/mcflow も /works/portfolio も、このページで表示する */}
          <Route path="/works/:slug" element={<WorkDetailPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

// 他のファイル（main.jsx）から App を使えるようにする
export default App
