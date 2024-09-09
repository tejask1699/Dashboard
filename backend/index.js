const express = require('express');
const cors = require('cors')
const cards = require('./db/cardsinfo');
const sales =  require('./db/salesinfo')
const news = require('./db/newsinfo')
const sellings = require('./db/sellinginfo');
const activityinfo = require('./db/activityinfo');

require('./db/config')

const app = express();
app.use(express.json())
app.use(cors());

app.get('/cards', async (req, resp) => {
      let info = await cards.find();
      if (info.length > 0) {
            resp.send(info)
      }
      else {
            resp.send("data is empty")
      }
})


app.get('/sales', async(req, resp) =>{
      let saleData = await sales.find()
      if(saleData.length > 0){
            resp.send(saleData)
      }
      else{
            resp.send("data is empty")
      }
})

app.get('/selling', async(req, resp) =>{
      let sellingData = await sellings.find()
      if(sellingData.length > 0){
            resp.send(sellingData)
      }else{
            resp.send("data is empty")
      }
})

app.get('/activities', async(req, resp)=>{
      let activityData = await activityinfo.find()
      if(activityData.length > 0){
            resp.send(activityData)
      }else{
            resp.send("data is empty")
      }
})


app.get('/news', async (req, resp)=>{
      let newsData = await news.find();
      if(newsData.length > 0){
            resp.send(newsData)
      }else{
            resp.send("data is empty")
      }
})


app.listen(5000)