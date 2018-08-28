// const mongoose = require("../db/connection");
// const Schema = mongoose.Schema;
//
// const Basketball = new Schema({
//   playerdata : {
//     firstName: String,
//   lastName: String,
//   playerId: Number,
//   teamId: Number,
//   }
// })
// module.exports =  mongoose.model("Basketball", Basketball)
const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const Basketball = new Schema({
  Image: String,
  Name: String,
  Position: String,
  Team: String,
  Number: Number,
  PPG: Number
})

module.exports = mongoose.model('Basketball', Basketball)
