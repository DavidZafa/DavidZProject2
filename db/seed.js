const Basketball = require('../models/basketball')
const playerData = require('./players.js')




playerData.forEach(player => {
  Basketball.create({
    info: {
      image: player.image,
      name: player.name,
      position: player.position,
      team: player.team,
      number: player.number,
      ppg: player.points
    }
  })
  .then(players => {
    players.save(err => console.log(err))
  })
})
