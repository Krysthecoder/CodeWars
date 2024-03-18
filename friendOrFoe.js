//Title: Friend or Foe
//Link: https://www.codewars.com/kata/55b42574ff091733d900002f/solutions/javascript

function friend(friends){
    let myFriend = []
    for(let i = 0; i < friends.length; i ++)
        if(friends[i].length == 4){
        myFriend.push(friends[i]) 
    }
    return myFriend
}

friend(["Ryan", "Kieran", "Mark"])