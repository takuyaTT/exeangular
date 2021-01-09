// express要求
const express = require('express');
// appにexpress紐付け
const app = express();
// mongoose要求
const mongoose = require('mongoose');

// configに紐付け
const config = require('./config/dev');
// FakeDbに紐付け
const FakeDb = require('./fake-db');
// プロダクト用ルーティング読み込み
const productRouters = require('./routes/products')

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: false,
  //useCreateIndex: true
}).then(()=>{
  const fakeDb = new FakeDb();
  fakeDb.initDb();
});

// コールバック関数でJSONファイルを渡す
// Router利用に変更
app.use('/api/v1/products',productRouters);

/*
app.get('/products',(req,res)=>{
  res.json({'success': true})
});
*/

// ポート番号の指定対策(指定がなければ3001を使用)
const PORT = process.env.PORT || '3001';

app.listen(PORT,()=>{
  console.log('Node.js is runnning');
})

