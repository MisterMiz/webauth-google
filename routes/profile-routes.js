const router = require("express").Router();
const authCheck = (req, res, next) => {
    //if not yet login
    if (!req.user) {
        res.redirect("/auth/login");
    } else {
        next();
    }
};

router.use(authCheck);

//showprofile page
router.get("/", (req, res) => {
    console.log(req.user);
    res.render("profile.ejs", { user: req.user });
});

module.exports = router;