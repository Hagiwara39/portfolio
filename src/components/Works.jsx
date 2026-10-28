// useState は React に用意されている機能。使うために読み込む
import { useState } from 'react'

// 作品の一覧データと、カード1枚分の部品を読み込む
import works from '../data/works.js'
import WorkCard from './WorkCard.jsx'

// 絞り込みボタンの一覧
// value: プログラムで使う値（works.js の category と同じ）/ label: ボタンに表示する文字
const filters = [
  { value: 'all', label: 'すべて' },
  { value: 'web', label: 'Web' },
  { value: 'design', label: 'デザイン' },
  { value: 'other', label: 'その他' },
]

// Works: 作品セクション（絞り込みボタンと作品カード）
function Works() {
  // selectedFilter: 今選ばれている絞り込み（"all" / "web" / "design" / "other"）を覚えておく「状態」
  // 最初は "all"（すべて）
  const [selectedFilter, setSelectedFilter] = useState('all')

  // 表示する作品だけを選び出す
  // filter: 配列から「条件が true になったものだけ」を集めて、新しい配列を作る
  const visibleWorks = works.filter((work) => {
    // 「すべて」が選ばれている、またはカテゴリが一致したら表示する
    return selectedFilter === 'all' || selectedFilter === work.category
  })

  return (
    // 作品セクション
    // 注意: CSS の Grid は「#works の直下」の要素を並べるので、カードを余計な div で囲まない
    <section id="works">
      <h2>作品</h2>

      {/* div: 意味を持たないただの箱。ここでは絞り込みボタンをまとめるために使う */}
      {/* JSX では class ではなく className と書く */}
      <div className="filter">
        {/* filters のボタン情報を1つずつ取り出して、button に変えて並べる */}
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            // 今選ばれているボタンにだけ is-active を付ける（CSS で色が反転する）
            className={selectedFilter === filter.value ? 'is-active' : ''}
            // クリックされたら、選ばれている絞り込みをこのボタンの value に変える
            onClick={() => setSelectedFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* 選び出した作品（visibleWorks）を1つずつ取り出して、WorkCard（カード1枚）に変えて並べる */}
      {/* key: React がカードを見分けるための目印。作品ごとにちがう id を渡す */}
      {visibleWorks.map((work) => (
        <WorkCard
          key={work.id}
          title={work.title}
          description={work.description}
        />
      ))}
    </section>
  )
}

export default Works
