// Supabase につなぐための準備をするファイル
// createClient: Supabase とやりとりするための「窓口」を作る関数
import { createClient } from '@supabase/supabase-js'

// .env.local に書いた値を読み込む
// import.meta.env は Vite の機能。VITE_ で始まる名前の値だけ読める
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

// URL とキーを渡して窓口を作る
const supabase = createClient(supabaseUrl, supabaseKey)

// 他のファイル（ContactForm.jsx）から supabase を使えるようにする
export default supabase
