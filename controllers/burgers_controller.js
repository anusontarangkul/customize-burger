const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// router.get("/", function (req, res) {
//     res.redirect("/burgers")
// });

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);
        res.render("index", {
            // burger_data: data
            burgers: data
        });
    });
});


module.exports = router;