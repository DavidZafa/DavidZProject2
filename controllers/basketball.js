const Basketball = require('../models/basketball')
const Team = require('../models/team')
const User = require('../models/user')

module.exports = {
  show: (req, res) => {

  },
  new: (req, res) => {
    res.render('basketball/new')
  },
  search: (req, res) => {
    console.log(req.body)
    Basketball.findOne({ 'info.name': req.body.name})
      .then(player => {

        res.render('basketball/show', { player })
      })
  },
  update: (req, res) => {
  },
  delete: (req, res) => {

  }
}
