// WorkCard: 作品カード1枚分
// { title, description } は、使う側（Works.jsx）から渡された値（props）を受け取る場所
function WorkCard({ title, description }) {
  return (
    // article: それだけで意味が完結する内容（ここでは作品1つ分）
    <article>
      {/* { } の中は JavaScript。受け取った title をここに表示する */}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default WorkCard
