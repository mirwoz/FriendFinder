const path = require("path");
var friends = require("../data/friends.js");

module.exports = (app) => {

    //Return all friends as JSON object "friends"
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    //receiving user data and matching it with friends data
    app.post("/api/friends", (req, res) => {

        var userSurvey = req.body;
        var userScore = userSurvey.scores;
        let scoreDiffArray = []

        //loop over friends data to access their scores
        for (let i = 0; i < friends.length; i++) {
            let friendScores = friends[i].scores;
            console.log(friendScores);
            //declare scoreDiff variable
            let scoreDiff = 0;

            //loop over each user score and subtract friend score, returning an absolute value
            for (let j = 0; j < userScore.length; j++) {
                scoreDiff += Math.abs(userSurvey.scores[j] - friends[i].scores[j]);

            }
            //push all score differences into an array
            scoreDiffArray.push(scoreDiff);



        }
        //compare each score difference to the first item in the scoreDiffArray. 
        //if any score is less than the first item, that is the best friend match
        let bestFriendPostition = 0;
        for (let i = 1; i < scoreDiffArray.length; i++) {
            if (scoreDiffArray[i] < scoreDiffArray[bestFriendPostition]) {
                bestFriendPostition = i;
            }
        }
        let bestFriend = friends[bestFriendPostition];
        res.json(bestFriend);
        console.log(bestFriend);
    });


};

