// const playerData = require('l/playerdata.js')
// const Basketball = require('../models/basketball')
// const bcrypt = require('bcrypt-nodejs')
//
// playerData.forEach(player => {
//   Basketball.create({
//     info: {
//       firstname: player.firstName,
//     lastname: player.lastName,
//       id: player.playerID,
//       team: player.teamId
//     }
//   })
//   .then(players => {
//     players.save(err => console.log(err))
//   })
// })
const playerseed = require('./playerseed.js')
const Basketball = require('../models/basketball')
const User = require('../models/user')
const bcrypt = require('bcrypt-nodejs')

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)


playerseed.forEach(player => {
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
// process.exit()
