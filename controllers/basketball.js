const Basketball = require('../models/basketball')
const Team = require('../models/team')
const User = require('../models/user')


module.exports = {
  show: (req, res) => {

  },
  new: (req,res) => {
    res.render('basketball/new', {name: 'new'})
  },
  search: (req, res) => {
    console.log(req.body)
    Basketball.findOne({'info.name': req.body.name})
    .then(player => {
      console.log(player.info)
      res.render('basketball/show')
    })
  },
  update: (req, res) => {
  },
  delete: (req, res) => {

  }
}
