const { Basketball } = require("../models/basketball");

module.exports = {
  index: (req, res) => {
    Basketball.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .then(basketball => {
        res.render("app/index", { basketball });
      });
  }
}
