const { Basketball } = require("../models/basketball");

module.exports = {
  index: (req, res) => {
    Basketball.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("author")
      .then(basketballs => {
        res.render("app/index", { basketballs });
      });
  }
};
