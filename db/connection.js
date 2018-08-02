const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/ballislife")
mongoose.Promise = Promise
module.exports = mongoose
