require('newrelic');
const express = require('express');
const app = express();
const PORT = 4321;

const search = require('./db')

app.use(express.static('public'))

app.get('/search/:term', (req, res)=> {
  const term = req.params.term;
  // console.log(term)
  search(`${term}`, (err,data)=>{
    if(err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

app.get('/hello', (req, res)=> {
  res.send('Hello World')
})


app.listen(PORT, (err)=> {
  if(!err) {
    console.log(`App is running on port ${PORT}!`)
  }
})