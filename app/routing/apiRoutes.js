module.exports = function(app) {

var friends = require("../data/friends");


  // all friends - provides JSON
  app.get("/api/friends", function(req, res) {

    var friend = req.params.friends;

    // if (chosen) {

    //   for (var i = 0; i < friends.length; i++) {
    //     if (chosen === friends[i].routeName) {
    //       return res.json(friends[i]);
    //     }
    //   }
    //   return res.json(false);
    // }
    return res.json(friends);
  });

  // Create New friends - takes in JSON input
  app.post("/api/friends", function(req, res) {

    var userData = req.body;
    friends.push(userData);
    res.json(userData);
  });
}