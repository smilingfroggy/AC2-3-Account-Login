const express = require("express")
const app = express()
const exphbs = require('express-handlebars')

//mongoose + model
//import from seeder

// template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// routes
app.get("/", (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  // check input
})

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})