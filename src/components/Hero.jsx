// 月の画像を読み込む（Header.jsx と同じ画像）
import moon from '../assets/new-moon.png'

// Hero: トップページの一番上にある、大きな黒いカード
// 左にキャッチコピーと名前、右に月の画像を並べる
function Hero() {
  return (
    // className="hero": CSS で黒いカードにするための目印
    <section className="hero">
      {/* 左側: 文字をまとめる箱 */}
      <div className="hero-text">
        {/* 小さいラベル */}
        <p className="hero-label">PORTFOLIO 2024 — 2026</p>

        {/* h1: このページで一番大きな見出し（キャッチコピー） */}
        {/* <br /> で改行して3行にする。span で囲んだ所だけ CSS でゴールドにする */}
        <h1 className="hero-title">
          Make<br />
          <span className="hero-accent">Well-Being</span><br />
          through <span className="hero-accent">UX Design</span>
        </h1>

        {/* ゴールドの短い線。ただの飾りなので、aria-hidden="true" で読み上げソフトに無視させる */}
        <div className="hero-line" aria-hidden="true"></div>

        <p className="hero-name">Saku Murayama</p>
        <p className="hero-role">UI・UX Designer / Design Engineer</p>
      </div>

      {/* 右側: 月の画像。飾りの画像なので alt="" にして読み上げない */}
      <img className="hero-moon" src={moon} alt="" />
    </section>
  )
}

export default Hero
