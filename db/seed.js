const Basketball = require('../models/basketball')
const playerData = require('./players.js')

// var mongoose  = require("./connection");
// var playerData = require("./seed");
//
// var Basketball = mongoose.model("Basketball");


Basketball.remove({}).then(function(){
  Basketball.collection.insert(playerData).then(function(){
    
  });
});

playerData.forEach(player => {
  Basketball.create({
    info: {
      image: player.image,
      name: player.name,
      position: player.position,
      team: player.team,
      number: player.number,
      points: player.points
    }
  })
  .then(players => {
    players.save(err => console.log(err))
  })
})
