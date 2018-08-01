const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const Basketball = new Schema({
  content: String,
  player: [String],
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = {
  Basketball: mongoose.model("Basketball", Basketball)
};
