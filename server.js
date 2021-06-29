const express = require('express');
// EJSはJavaScriptのテンプレートエンジン。
const ejs = require("ejs");

const app = express();
app.engine('ejs', ejs.renderFile); // EJSの読み込みを行っている。

// app.use()は、アプリケーションにミドルウェアをバインドするためのもの。
// express.static関数は、静的なファイルを提供するためのミドルウェア。今回は省略。
// app.use(express.static('public'));

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }))

// bodyParserを使用せずに、inputタグの入力値を取得する。
// また、express.urlencodedは、入力されたデータを文字列、または配列として認識するためのメソッド。
// extendedオプションをtrueにすると、配列型のフォームデータを取得することができる。falseがデフォルト。
app.use(express.urlencoded({ extended: false }))

// トップページ
app.get('/', (req, res) => {
  const msg = 'これはメッセージです(GET時)';
  res.render('index.ejs',
    {
      content: msg,
    })
})

// POST送信の処理
app.post('/', (req, res) => {
  const msg = 'あなたが入力した値(POST時) →' + `${req.body.message}`
  res.render('index.ejs',
    {
      content: msg
    }
  )
})

const server = app.listen(5000, () => {
  console.log('ここまできた！')
})