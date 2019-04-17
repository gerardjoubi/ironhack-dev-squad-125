const express = require("express");
const router = new express.Router();
const userModel = require("../models/user");

// ------------------------------------------------------
// this router only deals with user data exchange (CRUD)
// ------------------------------------------------------
// the full get route is /api/user/create
// the string /api/user/ comes from server.js settings.
// all the routes of userRouter are automaticaly prefixed
// ex: router.get("/all") === router.get("/api/user/all");
// -------------------------------------------------------

const create = data => userModel.create(data);

const getAll = () => userModel.find();

const getOne = id => userModel.findById({ _id: id });

const deleteOne = id => userModel.findOneAndDelete({ _id: id });

router.post("/create", (req, res) => {
  create(req.body)
    .then(users => res.send(users))
    .catch(dbErr => res.send(dbErr));
});

router.get("/all", (req, res) => {
  getAll()
    .then(users => res.send(users))
    .catch(dbErr => res.send(dbErr));
});

router.get("/:id", (req, res) => {
  getOne(req.params.id)
    .then(user => res.send(user))
    .catch(dbErr => res.send(dbErr));
});

router.delete("/:id", (req, res) => {
  deleteOne(req.params.id)
    .then(dbRes => res.send(dbRes))
    .catch(err => res.send(err));
});

// module.exports = router;
module.exports = {
  create,
  deleteOne,
  getAll,
  getOne,
  router
};
