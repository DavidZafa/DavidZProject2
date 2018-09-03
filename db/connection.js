const mongoose = require("mongoose")

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect("mongodb://localhost/ballislife");
}

mongoose.Promise = Promise

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
module.exports = mongoose
