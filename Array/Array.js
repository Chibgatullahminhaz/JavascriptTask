// // input random 5 number's and addition all number

// // var num = new Array();
// // var sum = 0;
// // for(var i=0; i<2; i++){
// //     num[i] =Number(prompt("Enter a Number :"));
// //     console.log(num[i]);
// //     sum = sum + num[i];
  
// // }

// // console.log(sum);

// // var names = ["minhaz","Sakib","sharika","Naima","Jihan"]
// // for(var i=0; i<5; i++){
// //    console.log(names[i]);

// // }



// console.clear();

//  var scrorse = [34,5456,45,666,66666,98];

// function heightScore(scrorse){
// console.log(scrorse)

// var maxScore = scrorse[0];
// for(var x=1; x<scrorse.length;x++){
//     if(maxScore < scrorse[x]){
//         maxScore = scrorse[x];
//     }
// }
// return maxScore;
// } 
// var heiScore = heightScore(scrorse);
// console.log(heiScore);

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