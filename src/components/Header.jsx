// Link: ページを移動するためのリンク（React Router 版の a タグ）
import { Link } from 'react-router-dom'

// 画像は JS の import で読み込む。moon には「画像の URL（文字）」が入る
// こうすると Vite が公開用に画像の名前を付け直してくれるので、ファイルの場所を気にしなくてよい
import moon from '../assets/new-moon.png'

// Header: ページの一番上の部分（ロゴ・メニュー・ダークモードボタン）
// isDark: 今ダークモードかどうか / onToggleTheme: ボタンが押されたときの処理（どちらも App から受け取る）
function Header({ isDark, onToggleTheme }) {
  // ボタンの文字は「次に押したら何になるか」にする
  // 条件 ? A : B は「条件が true なら A、false なら B」という書き方
  const buttonText = isDark ? 'Light' : 'Dark'

  return (
    // header: ページの一番上の部分（ロゴやメニュー）
    // className="site-header" は、CSS で上に固定するための目印
    <header className="site-header">
      {/* ロゴ: 押すとトップページへ戻る */}
      {/* aria-label: 読み上げソフト向けの名前。スマホでは文字を隠すので、ここで名前を付けておく */}
      <Link to="/" className="site-logo" aria-label="Saku Murayama（トップへ）">
        {/* src={moon}: import した画像の URL を入れる / alt="": 飾りの画像なので読み上げない */}
        <img src={moon} alt="" />
        {/* span: 意味を持たない、文字用の小さな箱。スマホでは CSS で隠す */}
        <span className="site-name">Saku Murayama</span>
      </Link>

      {/* nav: ページ内を移動するためのメニュー（ナビゲーション） */}
      <nav>
        {/* ul: 順番のない箇条書きリスト / li: リストの1項目 */}
        <ul>
          {/* to="/#about": トップページ（/）の id="about" の場所へ移動。詳細ページからでもトップに戻れる */}
          {/* a ではなく Link にすると、ページを読み込み直さないのでダークモードの状態が消えない */}
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#works">Works</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
      </nav>

      {/* button: 押せるボタン。type="button" は「フォーム送信ではないただのボタン」という意味 */}
      {/* id="theme-toggle" は、CSS でこのボタンの見た目を指定するための目印 */}
      {/* onClick: クリックされたら、App から受け取った onToggleTheme を実行する */}
      <button type="button" id="theme-toggle" onClick={onToggleTheme}>{buttonText}</button>
    </header>
  )
}

// 他のファイル（App.jsx）から Header を使えるようにする
export default Header
