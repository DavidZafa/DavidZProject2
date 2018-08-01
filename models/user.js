const mongoose = require("../db/connection");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

const User = new Schema({
  local: {
    email: String,
    password: String,
    username: String
  },
  basketball: [
    {
      type: Schema.Types.ObjectId,
      ref: "basketball"
    }
  ]
});

User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model("User", User);
