// About: 自己紹介セクション
function About() {
  return (
    // section: 内容のまとまり（章）。id="about" はメニューのリンク先の目印
    <section id="about">
      {/* h2: セクションの見出し（h1 の次に大きい見出し） */}
      {/* className="section-title": CSS で見出しの右に線を伸ばすための目印 */}
      <h2 className="section-title">About</h2>

      {/* 顔写真と文章を横に並べるための箱 */}
      <div className="about-body">
        {/* 顔写真用のダミー枠。今は仮の色だけ。あとで写真に入れかえる */}
        {/* aria-hidden="true": 中身のない飾りなので、読み上げソフトに無視させる */}
        <div className="about-photo" aria-hidden="true"></div>

        {/* 文章をまとめる箱 */}
        <div className="about-text">
          {/* p: 段落（ひとまとまりの文章） */}
          {/* br: 改行。JSX では <br /> のように最後に / を付けて閉じる */}
          <p>はじめまして！<br/>芝浦工業大学 3年の村山 朔といいます。UI/UXデザイナー、デザインエンジニアを目指しています。<br />
            デザイン工学部に所属しており、UI/UXデザインやプログラミングなど幅広く学んでいます！</p>
          <p>Webプログラミングを勉強中です。HTML / CSS / JavaScript / Reactを学んでいます。</p>
          <p>Skills：Figma / Illustrator / Photoshop / PremierePro / Fusion / Arduino / Git / GitHub </p>
          <p>Interests：UX/UI, Human-Computer-Interaction, Well-being</p>
        </div>
      </div>
    </section>
  )
}

export default About
