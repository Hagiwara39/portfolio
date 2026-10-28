// About: 自己紹介セクション
function About() {
  return (
    // section: 内容のまとまり（章）。id="about" はメニューのリンク先の目印
    <section id="about">
      {/* h2: セクションの見出し（h1 の次に大きい見出し） */}
      <h2>自己紹介</h2>
      {/* p: 段落（ひとまとまりの文章） */}
      {/* br: 改行。JSX では <br /> のように最後に / を付けて閉じる */}
      <p>はじめまして、さくです！UIUXデザイナー、デザインエンジニアを目指しています。<br />
        芝浦工業大学デザイン工学部の3年生で、UIUXやプログラミング、ビジネスなど幅広く学んでいます！</p>
      <p>Webプログラミングを勉強中です。HTML / CSS / JavaScript を中心に学んでいます。</p>
    </section>
  )
}

export default About
