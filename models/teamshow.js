
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const teamshow = new Schema({
  player: {
    type: Schema.ObjectId,
    ref: 'Basketball'
  }
})

module.exports = mongoose.model('teamshow',teamshow)
