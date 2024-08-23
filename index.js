// console.log("hello sonu");
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req,res)=>{
    res.send("sonu.jalandara")
})

app.get('/email',(req,res)=>{
    res.send("sonukundanpura05@gmail.com")
})
// we can use heading tags in res.send("<h1> Hello sonu </h1>")

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})