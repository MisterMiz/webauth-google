const express = require("express");
const path = require("path");
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
const passport = require("passport");
const cookieSession = require("cookie-session");
const key = require("./config/key")

const app = express();

app.set("view engine", "ejs");

// middleware
//cookie
app.use(cookieSession({
    ///1hr in ms
    maxAge: 1000 * 60 * 60,
    keys: [key.cookie.secret]
}));

//initialize passport
app.use(passport.initialize());

//session
app.use(passport.session());

// authen
app.use("/auth", authRoutes);

// Route(Services)


app.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, "views/home.html"));
    res.render("home.ejs");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("server is running at " + PORT);
});