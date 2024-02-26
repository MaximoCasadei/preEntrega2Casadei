const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
    if (req.session.login) {
        return res.redirect("/profile");
    }

    res.render("login");
});

router.get("/register", (req, res) => {
    if (req.session.login) {
        return res.redirect("/profile");
    }
    res.render("register");
});

router.get("/profile", (req, res) => {
    if (!req.session.login) {
        return res.redirect("/login");
    }

    res.render("profile", { user: req.session.user });
});

module.exports = router;