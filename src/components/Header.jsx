// Header: ページの一番上の部分（サイト名・メニュー・ダークモードボタン）
// isDark: 今ダークモードかどうか / onToggleTheme: ボタンが押されたときの処理（どちらも App から受け取る）
function Header({ isDark, onToggleTheme }) {
  // ボタンの文字は「次に押したら何になるか」にする
  // 条件 ? A : B は「条件が true なら A、false なら B」という書き方
  const buttonText = isDark ? 'ライトモードにする' : 'ダークモードにする'

  return (
    // header: ページの一番上の部分（サイト名やメニュー）
    <header>
      {/* h1: ページで一番大きな見出し。1ページに1つが基本 */}
      <h1>さくのポートフォリオ</h1>

      {/* nav: ページ内を移動するためのメニュー（ナビゲーション） */}
      <nav>
        {/* ul: 順番のない箇条書きリスト */}
        <ul>
          {/* li: リストの1項目 / a: リンク。href="#about" で id="about" の場所へ移動 */}
          <li><a href="#about">自己紹介</a></li>
          <li><a href="#works">作品</a></li>
          <li><a href="#contact">連絡先</a></li>
        </ul>
      </nav>

      {/* button: 押せるボタン。type="button" は「フォーム送信ではないただのボタン」という意味 */}
      {/* id="theme-toggle" は、CSS でこのボタンの余白を指定するための目印 */}
      {/* onClick: クリックされたら、App から受け取った onToggleTheme を実行する */}
      <button type="button" id="theme-toggle" onClick={onToggleTheme}>{buttonText}</button>
    </header>
  )
}

// 他のファイル（App.jsx）から Header を使えるようにする
export default Header
