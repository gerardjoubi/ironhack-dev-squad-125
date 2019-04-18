const express = require("express");
const router = new express.Router();
const productModel = require("./../models/product");
const categoryAPI = require("./api_category");

// ------------------------------------------------------
// this router only deals with product data exchange (CRUD)
// ------------------------------------------------------
// API PREFIX => /api/product/
// this string /api/product/ comes from server.js settings.
// all the routes of userRouter are automaticaly prefixed
// ex: router.get("/all") === router.get("/api/product/all");
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

const updateOne = id => fakePromise(); ;

// insert one product in database
router.post("/create", (req, res) => {
    create(req.body)
      .then(dbRes => res.status(200).json(dbRes))
      .catch(dbErr => res.send(dbErr));
});

// fetch all products from database
router.get("/all", (req, res) => {
    getAll()
      .then(dbRes => res.status(200).json(dbRes))
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
    .catch(dbErr => res.send(dbErr));
});

// update one product in database
router.patch("/:id", (req, res) => {
  updateOne(req.params.id, req.body)
    .then(dbRes => res.status(200).json(dbRes))
    .catch(dbErr => res.send(dbErr));
});

module.exports = {
  create,
  deleteOne,
  getAll,
  getOne,
  updateOne,
  router,
};
