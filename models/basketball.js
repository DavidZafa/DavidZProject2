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
  stats: {
    image: String ,
    name: String,
    position: String,
    team: String ,
    number: Number ,
    ppg: Number
  }
})

module.exports = mongoose.model('Basketball', Basketball)
