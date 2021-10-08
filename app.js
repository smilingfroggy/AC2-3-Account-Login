const express = require("express")
const app = express()
const exphbs = require('express-handlebars')
// connect with MongoDB
require('./config/mongoose')
const Accounts = require('./models/accounts')

// template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// body-parser
app.use(express.urlencoded({ extended: true }))

// routes
app.get("/", (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  // check input
  const { email, password } = req.body
  console.log(email, password)  //OK
  Accounts.findOne({ email: email })
    .lean()
    .then(user => {
      console.log(user) // { _id:.., password:,,}
      if (!user) {
        res.render('login', { noUser: "no user" })
      } else if (user.password === password) {
        res.render('welcome', { user })
      } else {
        res.render('login', { invalidPW: "invalid PW" })
      }
    })
    .catch(error => {
      console.log(error)
    })
})

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})