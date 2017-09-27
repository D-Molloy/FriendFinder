// Dependencies
// =============================================================
var friendsArray = require("../data/friends.js");

//apiRoutes.jss exports the following routes to servver
module.exports = function(app) {
    //this route gets the data stored in friends.js
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });
    //this route allows for data to be posted to friends.js
    app.post("/api/friends", function(req, res) {
        friendsArray.push(req.body);
        res.json(true);
    });
}