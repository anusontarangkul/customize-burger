const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// router.get("/", function (req, res) {
//     res.redirect("/burgers")
// });

router.get("/", (req, res) => {
    burger.all(data => {
        var hbsObject = { burgers: data };
        res.render("index", {
            burgers: data
        });
    });
});

router.post("/", (req, res) => {
    let newBurger = req.body.burger_name;
    if (newBurger !== "") {
        burger.insertOne(newBurger.trim(), () => {
            res.redirect("/");
        });
    }
});

router.put("/:id", (req, res) => {
    burger.updateOne(req.params.id, () => {
        res.redirect("/");
    })
})


module.exports = router;