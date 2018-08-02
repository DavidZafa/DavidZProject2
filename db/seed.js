const playerData = require('l/playerdata.js')
const Basketball = require('../models/basketball')
const bcrypt = require('bcrypt-nodejs')

playerData.forEach(player => {
  Basketball.create({
    info: {
      firstname: player.firstName,
    lastname: player.lastName,
      id: player.playerID,
      team: player.teamId
    }
  })
  .then(players => {
    plaers.save(err => console.log(err))
  })
})
