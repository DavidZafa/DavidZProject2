const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Basketball = new Schema({
  playerdata : {
    firstName: String,
  lastName: String,
  playerId: Number,
  teamId: Number,
  }
})
module.exports =  mongoose.model("Basketball", Basketball)
