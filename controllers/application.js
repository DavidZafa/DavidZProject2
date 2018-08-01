const { Bread } = require("../models/bread");

module.exports = {
  index: (req, res) => {
    Bread.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("author")
      .then(breads => {
        res.render("app/index", { breads });
      });
  }
};
