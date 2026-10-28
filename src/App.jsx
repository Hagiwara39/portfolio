// useState と useEffect は React に用意されている機能。使うために読み込む
import { useState, useEffect } from 'react'

// 部品（コンポーネント）を components フォルダから読み込む
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Works from './components/Works.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

// App: ページ全体を組み立てる部品（コンポーネント）
// 中身はそれぞれの部品のファイルに分けて、ここでは並べる順番だけを決める
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
        <About />
        <Works />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

// 他のファイル（main.jsx）から App を使えるようにする
export default App
