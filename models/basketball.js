const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const Basketball = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = {
  Bread: mongoose.model("basketball", Basketball)
};
