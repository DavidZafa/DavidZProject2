
// module.exports = mongoose.model('basketballTeam', basketballTeam)

const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Team = new Schema({
  player: {
    type: Schema.ObjectId,
    ref: 'Basketball'
  }
})

module.exports = mongoose.model('Team', Team)
