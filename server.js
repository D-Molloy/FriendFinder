// Your `server.js` file should require the basic npm packages we've used in class: `express`, `body-parser` and `path`.

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// app.use(express.static("app/public"));

require("./app/routing/apiRoutes.js")(app);

require("./app/routing/htmlRoutes.js")(app);


// require("./app/routing/apiRoutes.js");
// //(app);
// require("./app/routing/htmlRoutes.js");
// //(app);



// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
    console.log("App listening on PORT " + port);
});
  