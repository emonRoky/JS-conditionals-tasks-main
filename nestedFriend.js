const { log } = require("console");

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
function nestedFriend(myScore,friendScore) {
    if (myScore > 80) {
        if (friendScore >= 80) {
            return "Lets go to the restaurant!";
        } else if (friendScore < 80 && friendScore >= 60) {
            return "good luck next time!";
        } else if (friendScore < 60 && friendScore >= 40){
            return "I am not gonna seen your message!";
        } else{
            return "Blocked!";
        }
    } else{
        return "I am so sad!";
    }
}
let myScore = 70;
let friendScore = 20;
console.log(nestedFriend(myScore,friendScore));
