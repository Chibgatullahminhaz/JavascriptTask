
console.clear();


var PlayersInfo = [
    ["minhaz", 24],
    ["saiib", 27],
    ["sharika", 25],
    ["jisan", 44],
    ["Naima", 45],
] 

function highestRunScore(PlayersInfo){
console.log(PlayersInfo);
var heightScorer = PlayersInfo [0] [0];
var heightScore = PlayersInfo [0] [1];
for(var x=1; x<PlayersInfo.length;x++){
    if(heightScore<PlayersInfo[x][1]){
        heightScore = PlayersInfo[x][1];
        heightScorer = PlayersInfo[x][0]
    }
}
return heightScorer;
return heightScore;

}
var heiScore = highestRunScore(PlayersInfo);
console.log(heiScore);