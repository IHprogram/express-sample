const express = require('express');
// EJSはJavaScriptのテンプレートエンジン。
const ejs = require("ejs");

const app = express();
app.engine('ejs', ejs.renderFile); // EJSの読み込みを行っている。
// app.use()は、アプリケーションにミドルウェアをバインドするためのもの。
app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

// トップページ
app.get('/', (req, res) => {
  const msg = 'これはメッセージです';
  res.render('index.ejs',
    {
      title: 'Index',
      content: msg,
    })
})

// POST送信の処理
app.post('/', (req, res) => {
  const msg = 'これはPOST送信時のメッセージだ' + `あなたは${req.body.message}`
  res.render('index.ejs',
    {
      title: 'Postedです！',
      const: msg
    }
  )
})

const server = app.listen(5000, () => {
  console.log('ここまできた！')
})