const express = require("express");
const router = new express.Router();
const userModel = require("./../models/user");

// console.log(userModel);

// the full get route is /api/user/create
// the string /api/user/ comes from server.js setting. when we use the router, we prefix it !!!
// so all the routes of userRouter are automaticaly prefixed

router.post("/create", (req, res) => {
  userModel
    .create(req.body)
    .then(dbSuccess => {
      res.send({
          txt: "yay !!! user created",
          status: "success"
        }
      );
    })
    .catch(dbErr => {
      res.send({
          txt: "nay !! database problem",
          status: "error",
          details: dbErr
        });
    })
});

// router.post("/create", (req, res) => {
//   userModel
//     .create(req.body)
//     .then(dbSuccess => {
//       res.render("dashboard.hbs", {
//         isForm: true,
//         msg: {
//           txt: "yay !!! user created",
//           status: "success"
//         }
//       });
//     })
//     .catch(dbErr => {
//       res.render("dashboard.hbs", {
//         isForm: true,
//         msg: {
//           txt: "nay !! database problem",
//           status: "error",
//           details: dbErr
//         }
//       });
//     });
// });

router.get("/all", (req, res) => {
  userModel.find().then(users => {
    res.send(users);
  }).catch(dbErr => {
    res.send(dbErr);
  })
});

module.exports = router;
