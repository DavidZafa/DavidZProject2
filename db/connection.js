const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/breaddit");
mongoose.Promise = Promise;
module.exports = mongoose;
