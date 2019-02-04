const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.get('/', (req,res) => res.send("/"))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))
