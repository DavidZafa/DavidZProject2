
const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const Basketball = new Schema({
  info: {
    image: String,
    name: String,
    position: String,
    team: String,
    number: Number,
    points: Number
  }
})

module.exports = mongoose.model('Basketball', Basketball)
