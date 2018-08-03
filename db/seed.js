
const playerSeed = require('./playerseed.js')
const Basketball = require('../models/basketball')
const User = require('../models/user')
const bcrypt = require('bcrypt-nodejs')

playerSeed.forEach(player => {
  basketball.create({
    info: {
      image: player.image ,
      name: player.name,
      position: player.position,
      team: player.Team ,
      number: player.Number ,
      ppg: player.PPG
    }
  })
    .then(player => {
      player.save(err => console.log(err))
    })
})
