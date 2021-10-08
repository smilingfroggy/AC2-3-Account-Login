const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/AC2-3-accounts')
const db = mongoose.connection

db.on('error', () => { console.log('MongoDB error!') })
db.once('open', () => { console.log('MongoDB connected') })

module.exports = db