const express = require("express");
const router = new express.Router();
const userModel = require("../models/user");

// ------------------------------------------------------
// this router only deals with user data exchange (CRUD)
// ------------------------------------------------------
// API PREFIX => /api/user/
// this string /api/user/ comes from server.js settings.
// all the routes of userRouter are automaticaly prefixed
// ex: router.get("/all") === router.get("/api/user/all");
// -------------------------------------------------------

function fakePromise() {
  return new Promise((resolve, reject) => {
    resolve("@todo")
  });
}

const create = data => fakePromise();

const getAll = () => fakePromise();

const getOne = id => fakePromise();

const deleteOne = id => fakePromise();

const updateOne = id => fakePromise();


// insert one product in database
router.post("/create", (req, res) => {
  create(req.body)
    .then(users => res.status(200).json(users))
    .catch(dbErr => res.json(dbErr));
});

// fetch all products from database
router.get("/all", (req, res) => {
  getAll()
    .then(users => res.status(200).json(users))
    .catch(dbErr => res.send(dbErr));
});

// get one product from database
router.get("/:id", (req, res) => {
  getOne(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(dbErr => res.send(dbErr));
});

// remove one product from database
router.delete("/:id", (req, res) => {
  deleteOne(req.params.id)
    .then(dbRes => res.status(200).json(dbRes))
    .catch(err => res.send(err));
});

// module.exports = router;
module.exports = {
  create,
  deleteOne,
  getAll,
  getOne,
  updateOne,
  router
};
