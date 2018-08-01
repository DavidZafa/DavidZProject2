// const Add = require("../models/Add");
//
// module.exports = {
//
//     show: (req, res) => {
//      res.render("add/home");
//     },
//
//     create: (req, res) => {
//       Add.create({
//         name: req.body.add.name,
//         content: req.body.add.content
//       }).then(added =>{
//             res.render("add/thanks", {added})
//         })
//     }
//   }
