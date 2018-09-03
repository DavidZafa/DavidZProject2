
const Team = require('../models/team')
const Basketball = require('../models/basketball')

module.exports = {
  show: (req, res) => {
    res.render('team/show', {name: 'express'})
  },
  new: (req, res) => {

  },
  create: (req, res) => {
  },
 //  delete: (req, res) => {
 //   Basketball.findOneAndRemove({ _id: req.params.id }).then(() => {
 //     res.redirect("/")
 //   })
 // }

}
