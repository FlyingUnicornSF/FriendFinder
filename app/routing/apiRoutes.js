// Search for all friends - provides JSON
app.get("/api/friends", function(req, res) {
  var chosen = req.params.friends;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
    return res.json(false);
  }
  return res.json(friends);
});

// Create New friends - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newFriends = req.body;
  newFriends.routeName = newFriends.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriends);

  friends.push(newFriends);

  res.json(newFriends);
});