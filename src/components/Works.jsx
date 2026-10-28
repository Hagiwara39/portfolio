// Works: 作品セクション（絞り込みボタンと作品カード）
function Works() {
  return (
    // 作品セクション
    // 注意: CSS の Grid は「#works の直下」の要素を並べるので、カードを余計な div で囲まない
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
  )
}

export default Works
