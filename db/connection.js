const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Ball");
mongoose.Promise = Promise;
module.exports = mongoose;
