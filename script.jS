
const things =["dog", "cat", "man", "women"];
const verbs = ["ran", "jumped", "crawled", "walked"];
const adj = ["away from", "toward", "up", "down"];
const place = ["the stairs", "the field", "the town", "the street"];

//Function that generates a random message
function messageGen(){
    let rand = Math.floor(Math.random(4) * 4);
    let verbRand = Math.floor(Math.random(4) * 4);
    let adjRand = Math.floor(Math.random(4) * 4);
    let placeRand = Math.floor(Math.random(4) * 4);

    console.log(`The ${things[rand]} ${verbs[verbRand]} ${adj[adjRand]} ${place[placeRand]}`);
}

messageGen();