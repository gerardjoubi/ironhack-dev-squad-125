const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const productAPI = require("./api_product"); // import product logic module
const categoryAPI = require("./api_category"); // import product logic module

/* ------------------------------------------------------
          this router only serves pages !!! 
          some routes interact with our productAPI
          router prefix: /dashboard/product/
------------------------------------------------------- */

router.get("/create", (req, res) => {
  categoryAPI.getAll().then(dbRes => {
    res.render("dashboard_product", {
      isForm: true,
      categories: dbRes,
      msg: res.locals.flashMessage
    });
  })
});


router.get("/:id/edit", (req, res) => {
  productAPI
    .getOne(req.params.id)
    .then(product => res.render("details_product", { product }))
    .catch(err => res.render("details_product", { msg: "db problem" }));
});

router.get("/list", (req, res) => {
  productAPI
    .getAll()
    .then(products => {
      res.render("dashboard_product", {
        products,
        isBoard: true,
        msg: res.locals.flashMessage
      });
    })
    .catch(dbErr => {
      res.render("dashboard_product", {
        isBoard: true,
        msg: res.locals.flashMessage
      });
    });
});

router.post("/", (req, res) => {
  productAPI
    .create(req.body)
    .then(dbSuccess => {
      req.session.flashMessage = {
        status: "success",
        txt: "Yay !! product successfully created"
      };
      res.redirect("/dashboard/product/create");
    })
    .catch(dbErr => {
      req.session.flashMessage = {
        status: "error",
        txt: "Nay !! database error while creating product",
        details: dbErr.message
      };
      res.redirect("/dashboard/product/create");
    });
});

router.get("/delete/:id", (req, res) => {
  productAPI
    .deleteOne(req.params.id)
    .then(dbRes => {
      req.session.flashMessage = {
        txt: "Yay ! product deleted successfully",
        status: "success"
      };
      res.redirect("/dashboard/product/list");
    })
    .catch(dbErr => {
      req.session.flashMessage = {
        txt: "database error",
        status: "Oh no ! A database error occured while deleting the product",
        detail: dbErr._message
      };
      res.redirect("/dashboard/product/list");
    });
});

module.exports = router;
