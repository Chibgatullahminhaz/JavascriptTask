var WonofNumber = 0;
var lostofnumber = 0;

for(var i=1; i<=5; i++){
    
var gassingNumber = parseInt(prompt("Enter a Number in 1 to 5 :"));
var RandumNumber = Math.floor(Math.random()*5 + 1);
if(gassingNumber==RandumNumber){
document.write("<h4>Horra! You Have Won </h4> " + "<br>")
WonofNumber++
} else{
    document.write("<h4>Sorry! You Have Lost </h4> " + "<br>")
    lostofnumber++
}
}

document.write("<h1>Won Number of </h1> " + WonofNumber + "<br>");
document.write("<h1>lost Number of </h1> " + lostofnumber + "<br>");