const Basketball = require('../models/basketball')
const BasketballInstance = require('../models/teamshow')
const User = require('../models/user')


module.exports = {
  show: (req, res) => {
    console.log(req)
  },
  new: (req,res) => {
    res.render('basketball/new', {name: 'new'})
  },
  search: (req, res) => {
    Basketball.findOne({'info.name': req.body.player})
    .then(player => {
      res.render('basketball/show', { player })
    })
  },
  update: (req, res) => {
  },

  delete: (req, res) => {
    User.findOne({_id: req.params.id})
    .then(user => {
      Basketball.findOne({name: req.body.name}).then(player => {
        user.team.push(player)
        user.save()
      })
    })
  }
 //  delete: (req, res) => {
 //   Basketball.findOneAndRemove({ _id: req.params.id }).then(() => {
 //     res.redirect("/")
 //   })
 // }
}
