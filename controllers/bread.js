const { Bread, Comment } = require("../models/bread");

module.exports = {
  show: (req, res) => {
    bread.findOne({ _id: req.params.id })
      .populate("author")
      .exec(function(err, bread) {
        Comment.populate(bread.comments, { path: "author" }, function(
          err,
          comments
        ) {
          bread.comments = comments;
          console.log(bread);
          res.render("bread/show", bread);
        });
      });
  },
  new: (req, res) => {
    res.render("bread/new");
  },
  create: (req, res) => {
    bread.create({
      content: req.body.bread.content,
      author: req.user._id
    }).then(bread => {
      req.user.breads.push(bread);
      req.user.save(err => {
        res.redirect(`/bread/${bread._id}`);
      });
    });
  },
  update: (req, res) => {
    let { content } = req.body;
    bread.findOne({ _id: req.params.id }).then(bread => {
      bread.comments.push({
        content,
        author: req.user._id
      });
      bread.save(err => {
        res.redirect(`/bread/${bread._id}`);
      });
    });
  },
  requireAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/");
    }
  }
};
