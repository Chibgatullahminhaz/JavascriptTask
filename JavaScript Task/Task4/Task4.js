
var Marks = parseFloat(prompt("Enter your Marks"));

if(Marks>=80){
    document.write("A+")
}

else if(Marks>=70){
    document.write("A")
}

else if(Marks>=60){
    document.write("A-")
}
else if(Marks>=50){
    document.write("B")
}
else if(Marks>=40){
    document.write("C")
}
else if(Marks>=33){
    document.write("D")
}
else{
    document.write("Fail")
}