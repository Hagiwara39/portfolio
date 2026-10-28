// 部品（コンポーネント）を components フォルダから読み込む
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Works from './components/Works.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

// App: ページ全体を組み立てる部品（コンポーネント）
// 中身はそれぞれの部品のファイルに分けて、ここでは並べる順番だけを決める
function App() {
  // return の ( ) の中に書いたものが画面に表示される
  // <> と </> は「画面には何も出ない、まとめるためだけの箱」（フラグメント）
  return (
    <>
      <Header />

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
