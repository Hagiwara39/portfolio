// Header: ページの一番上の部分（サイト名・メニュー・赤瓦モードボタン）
function Header() {
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
      <button type="button" id="theme-toggle">赤瓦モードにする</button>
    </header>
  )
}

// 他のファイル（App.jsx）から Header を使えるようにする
export default Header
