const Basketball = require('../models/basketball')
const Team = require('../models/team')
const User = require('../models/user')


module.exports = {
  show: (req, res) => {
    console.log(req)
  },
  new: (req,res) => {
    res.render('basketball/new', {name: 'new'})
  },
  search: (req, res) => {
    console.log('req body: ', req.body)
    Basketball.findOne({'info.name': req.body.player})
    .then(player => {
      console.log('player: ', player)
      res.render('basketball/show', { player })
    })
  },
  update: (req, res) => {
  },
  delete: (req, res) => {

  }
}
