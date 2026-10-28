// App: ページ全体を組み立てる部品（コンポーネント）
// 元の index.html の <body> の中身を、JSX に直してそのまま持ってきた
function App() {
  // return の ( ) の中に書いたものが画面に表示される
  // JSX では、返すものを1つの箱にまとめる必要がある
  // <> と </> は「画面には何も出ない、まとめるためだけの箱」（フラグメント）
  return (
    <>
      {/* header: ページの一番上の部分（サイト名やメニュー） */}
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

      {/* main: このページのメインの内容。1ページに1つだけ使う */}
      <main>

        {/* section: 内容のまとまり（章）。id="about" はメニューのリンク先の目印 */}
        <section id="about">
          {/* h2: セクションの見出し（h1 の次に大きい見出し） */}
          <h2>自己紹介</h2>
          {/* p: 段落（ひとまとまりの文章） */}
          {/* br: 改行。JSX では <br /> のように最後に / を付けて閉じる */}
          <p>はじめまして、さくです！UIUXデザイナー、デザインエンジニアを目指しています。<br />
            芝浦工業大学デザイン工学部の3年生で、UIUXやプログラミング、ビジネスなど幅広く学んでいます！</p>
          <p>Webプログラミングを勉強中です。HTML / CSS / JavaScript を中心に学んでいます。</p>
        </section>

        {/* 作品セクション */}
        <section id="works">
          <h2>作品</h2>

          {/* div: 意味を持たないただの箱。ここでは絞り込みボタンをまとめるために使う */}
          {/* JSX では class ではなく className と書く */}
          <div className="filter">
            {/* data-filter: 「このボタンはどのカテゴリを表示するか」を書いておく自作のメモ欄 */}
            {/* className="is-active" は「今選ばれているボタン」の目印。最初は「すべて」 */}
            <button type="button" className="is-active" data-filter="all">すべて</button>
            <button type="button" data-filter="web">Web</button>
            <button type="button" data-filter="design">デザイン</button>
            <button type="button" data-filter="other">その他</button>
          </div>

          {/* article: それだけで意味が完結する内容（ここでは作品1つ分） */}
          {/* data-category: 「この作品のカテゴリ」を書いておく自作のメモ欄 */}
          <article data-category="web">
            {/* h3: h2 の下に入る小見出し */}
            <h3>ポートフォリオサイト</h3>
            <p>今見ているこのサイトです。素の HTML / CSS / JavaScript で作りました。</p>
          </article>

          <article data-category="web">
            <h3>カフェのWebサイト（ダミー）</h3>
            <p>架空のカフェの紹介サイト。Web カテゴリの例です。</p>
          </article>

          <article data-category="design">
            <h3>アプリのUIデザイン（ダミー）</h3>
            <p>家計簿アプリの画面デザイン。デザイン カテゴリの例です。</p>
          </article>

          <article data-category="other">
            <h3>写真作品（ダミー）</h3>
            <p>街の風景を撮った写真。その他 カテゴリの例です。</p>
          </article>
        </section>

        {/* 連絡先セクション */}
        <section id="contact">
          <h2>連絡先</h2>
          <p>お気軽にご連絡ください！</p>
          {/* a href="mailto:..." : クリックするとメールソフトが開くリンク */}
          <p>メール：<a href="mailto:murayama.saku@gmail.com">murayama.saku@gmail.com</a></p>
        </section>

      </main>

      {/* footer: ページの一番下の部分（著作権表示など） */}
      <footer>
        {/* small: 注意書きや著作権表示など「小さな補足」に使うタグ / &copy; は © 記号（JSX でもそのまま使える） */}
        <p><small>&copy; 2026 さく</small></p>
      </footer>
    </>
  )
}

// 他のファイル（main.jsx）から App を使えるようにする
export default App
