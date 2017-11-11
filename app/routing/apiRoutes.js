module.exports = function(app) {

var friends = require("../data/friends");


  // all friends - provides JSON
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  // Create New friends - takes in JSON input
  app.post("/api/friends", function(req, res) {  
    var newUser = req.body;
    newUser["scores"] = req.body["scores[]"].map(function(val) {
      return Number(val);
    })

    delete newUser["scores[]"]

    //now we have the correct format of the new user and friends, 
    //before adding new user to the friends list, 
    //best match logic
    var smallestDiff = 10 * newUser.scores.length;
    var bestMatch ={
      name: undefined,
      photo: undefined
    }
    friends.forEach(function(user){
      var totalDiff = 0;
      for (var i = 0; i < user.scores.length; i++) {
        totalDiff += Math.abs(newUser.scores[i] - user.scores[i])
      }
      if(smallestDiff > totalDiff) {
         smallestDiff = totalDiff;
        bestMatch.name = user.name;
        bestMatch.photo = user.photo;
      }
    })
    // add new user to the friends list 
    friends.push(newUser);

    //return the best match info to the front end
    res.send(bestMatch)

  });

}

