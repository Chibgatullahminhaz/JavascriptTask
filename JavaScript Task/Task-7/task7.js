var numberOne = Number(prompt("Enter the First Number"));
var numberTow = Number(prompt("Enter the second Number"));
var numberThree = Number(prompt("Enter the third Number"));


var Result = numberOne>numberTow & numberOne>numberThree ? numberOne : numberTow>numberOne & numberTow>numberThree?numberTow:numberThree
document.write(Result);



numberOne>numberThree&numberOne>numberTow?numberOne:numberTow>numberOne&numberTow>numberThree?numberTow:numberThree

var Number = Number(prompt("Enter your Number"));

var result = Number<0? "negetive": Number>0? "positive": "Zero"
console.log(result);