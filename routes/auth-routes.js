const router = require("express").Router();
const passport = require("passport");

// show login page
router.get("/login", (req, res) => {
    res.render("login.ejs");
});

// login using google
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

//if login success, redirect here
router.get("/google/redirect", (req, res) => {
    res.send("Login Success");
});

module.exports = router;