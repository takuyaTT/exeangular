// Using Node.js `require()`
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const config = require('./config/dev');

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: false,
  //useCreateIndex: true
});

// コールバック関数でJSONファイルを渡す
app.get('/products',(req,res)=>{
  res.json({'success': true})
});
// ポート番号の指定対策(指定がなければ3001を使用)
const PORT = process.env.PORT || '3001';

app.listen(PORT,()=>{
  console.log('Node.js is runnning');
})

