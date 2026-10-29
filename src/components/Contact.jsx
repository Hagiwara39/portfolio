// お問い合わせフォームの部品を読み込む
import ContactForm from './ContactForm.jsx'

// Contact: 連絡先セクション
function Contact() {
  return (
    // 連絡先セクション
    <section id="contact">
      <h2>連絡先</h2>
      <p>お気軽にご連絡ください！</p>
      {/* a href="mailto:..." : クリックするとメールソフトが開くリンク */}
      <p>メール：<a href="mailto:murayama.saku@gmail.com">murayama.saku@gmail.com</a></p>

      {/* お問い合わせフォーム */}
      <ContactForm />
    </section>
  )
}

export default Contact
