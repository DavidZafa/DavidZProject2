const Basketball = require('../models/basketball')
const User = require('../models/user')
const Team = require('../models/basketballteam')


module.exports = {
  show: (req,res) => {

  },
  new: (req,res) => {
    res.render('basketball/new', {name: 'new'})
  },

  search: (req, res) => {
  console.log(req.body)
  Basketball.findOne({'info.name': req.body.name})
  .then(basketball => {
    res.render('basketball/show', {basketball})
  })
},
update: (req, res) => {

},
delete: (req, res) => {

}

}

// const { Basketball, Comment } = require("../models/basketball");
//
// module.exports = {
//   show: (req, res) => {
//     Basketball.findOne({ _id: req.params.id })
//       .populate("author")
//       .exec(function(err, basketball) {
//         Comment.populate(basketball.comments, { path: "author" }, function(
//           err,
//           comments
//         ) {
//           basketball.comments = comments;
//           console.log(basketball);
//           res.render("basketball/show", basketball);
//         });
//       });
//   },
//   new: (req, res) => {
//     res.render("basketball/new");
//   },
//   create: (req, res) => {
//      Basketball.create({
//       content: req.body.basketball.content,
//       author: req.user._id
//     }).then(basketball => {
//       req.user.basketballs.push(basketball);
//       req.user.save(err => {
//         res.redirect(`/basketball/${basketball._id}`);
//       });
//     });
//   },
//   update: (req, res) => {
//     let { content } = req.body;
//     Basketball.findOne({ _id: req.params.id }).then(basketball => {
//       basketball.player.push({
//         content,
//         author: req.user._id
//       });
//       basketball.save(err => {
//         res.redirect(`/basketball/${basketball._id}`);
//       });
//     });
//   },
//   delete: (req, res) => {
//    Basketball.findOneAndRemove({ _id: req.params.id }).then(() => {
//      res.redirect("/")
//    })
//  },
//   requireAuth: function(req, res, next) {
//     if (req.isAuthenticated()) {
//       next();
//     } else {
//       res.redirect("/");
//     }
//   }
// };
