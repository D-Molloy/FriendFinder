// Dependencies
// =============================================================
var path = require("path");
var express = require("express");

// Routes
// =============================================================

//htmlRoutes.jss exports the following routes to servver
module.exports = function(app) {
    //if express can't find any static files, it will look for them in app/public
    app.use(express.static("app/public"));
    //the route for the home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    //the route for the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};