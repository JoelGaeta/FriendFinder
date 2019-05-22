var friends = require("../app/data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var totalDifference = 0;
    var match = {
      name: "",
      photo: "",
      friendDifference: 1000
    };
    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;

    var parse = userScores.map(function(item) {
      return parseInt(item, 10);
    });
    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: b
    };
    console.log("name:" + userName);
    console.log("User Score:" + userScores);

    var sum = b.reduce((a, b) => a + b, 0);
    console.log("Sum of users score " + sum);
    console.log("Best match" + match.friendDifference);

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDifference = 0;
      console.log("Total Diff" + totalDifference);
      console.log("Best match friend diff" + match.friendDifference);
      var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log("Total friend score" + bfriendScore);
      totalDifference += Math.abs(sum - bfriendScore);
      console.log("------------" + totalDifference);

      if (totalDifference <= match.friendDifference) {
        match.name = friends[i].name;
        match.photo = friends[i].photo;
        match.friendDifference = totalDifference;
      }
      console.log(totalDifference + "Total Difference");
    }
    console.log(match);
    friends.push(userData);
    console.log("new User added");
    console.log(userData);
    res.json(match);
  });
};