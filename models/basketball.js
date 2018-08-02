const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Basketball = new Schema({
  playerdata : {
    name: String,
    position: String,
    age: Number,
    team: String
  }
})
module.exports =  mongoose.model("Basketball", Basketball)
