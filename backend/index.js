const connectToMongo=require("./db");
const express = require('express')

connectToMongo();
const app = express()
const port = 5000

app.get('/', (req, res) => {    
  res.send('Hello World!')
})

//this is the middleware we need to use for getting request
app.use(express.json())


//ahiya badha models routes sathe connect karvana
app.use("/api/product", require('./routes/product'))
app.use("/api/user", require('./routes/user'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


