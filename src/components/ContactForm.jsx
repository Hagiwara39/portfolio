// useState は React に用意されている機能。使うために読み込む
import { useState } from 'react'

// Supabase の窓口を読み込む
import supabase from '../lib/supabase.js'

// ContactForm: お問い合わせフォーム
// 入力された内容を Supabase の messages テーブルに保存する
function ContactForm() {
  // 入力欄の中身を覚えておく「状態」。最初は空っぽ
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // 送信の状態: "idle"（まだ送っていない）/ "sending"（送信中）/ "success"（完了）/ "error"（失敗）
  const [status, setStatus] = useState('idle')

  // 送信ボタンが押されたときの処理
  // async: 中で await（終わるまで待つ）を使うための目印
  async function handleSubmit(event) {
    // フォームの「ページを読み込み直す」という元々の動きを止める
    event.preventDefault()

    setStatus('sending')

    // messages テーブルに1行追加する（insert = 追加）
    // { 列の名前: 入れる値 } の形で渡す
    // await: Supabase から返事が来るまで待つ
    const { error } = await supabase
      .from('messages')
      .insert({ name: name, email: email, message: message })

    if (error) {
      // 失敗したら、原因を開発者ツールのコンソールに出しておく
      console.error(error)
      setStatus('error')
    } else {
      // 成功したら、入力欄を空に戻す
      setName('')
      setEmail('')
      setMessage('')
      setStatus('success')
    }
  }

  return (
    // onSubmit: 送信ボタンが押されたら handleSubmit を実行する
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* label: 入力欄の名前。htmlFor と input の id をそろえると、文字を押しても入力欄が選ばれる */}
      {/* JSX では for ではなく htmlFor と書く（class と className の関係と同じ） */}
      <label htmlFor="contact-name">名前</label>
      {/* value: 入力欄に表示する値（state） / onChange: 入力されるたびに state を書き換える */}
      {/* required: 空のままだと送信できないようにする */}
      <input
        id="contact-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor="contact-email">メール</label>
      {/* type="email": メールアドレスの形になっていないと送信できないようにする */}
      <input
        id="contact-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="contact-message">本文</label>
      {/* textarea: 何行も書ける入力欄 */}
      <textarea
        id="contact-message"
        rows="5"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
      />

      {/* type="submit": 押すとフォームを送信するボタン / disabled: 送信中は押せないようにする */}
      <button type="submit" disabled={status === 'sending'}>
        送信する
      </button>

      {/* 条件 && 表示するもの: 条件が true のときだけ表示する */}
      {status === 'sending' && <p>送信中です…</p>}
      {status === 'success' && <p>送信しました。ありがとうございます！</p>}
      {status === 'error' && <p>送信できませんでした。時間をおいてもう一度お試しください。</p>}
    </form>
  )
}

export default ContactForm
