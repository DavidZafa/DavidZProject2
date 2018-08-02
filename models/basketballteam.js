const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const basketballTeam = new Schema({
  basketball : {
    type: Schema.ObjectId,
    ref: 'basketball'
  }
})

module.exports = mongoose.model('basketballTeam', basketballTeam)
