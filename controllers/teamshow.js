
const BasketballInstance = require('../models/teamshow')
const Basketball = require('../models/basketball')

module.exports = {
  show: (req, res) => {
    res.render('teamshow/show', {title: 'express'})
  },
  new: (req, res) => {
  },
  create: (req, res) => {
  },
}
