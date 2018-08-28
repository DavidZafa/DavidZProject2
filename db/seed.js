const Basketball = require('../models/basketball')
const players = require('./players.json')

Basketball.deleteMany({})
.then(() => {
  Basketball.collection.insertMany(players)
  .then(player => {
    console.log(player)
  })
  .catch(err => {
    console.log(err)
  })
})
