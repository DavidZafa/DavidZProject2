
const Team = require('../models/team')
const Basketball = require('../models/basketball')

module.exports = {
  show: (req, res) => {
    res.render('team/show', {title: 'express'})
  },
  new: (req, res) => {

  },
  create: (req, res) => {
  }
}
