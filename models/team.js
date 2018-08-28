
// module.exports = mongoose.model('basketballTeam', basketballTeam)

const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Team = new Schema({
  Basketball: {
    type: Schema.ObjectId,
    ref: 'basketball'
  }
})

module.exports = mongoose.model('Team', Team)
