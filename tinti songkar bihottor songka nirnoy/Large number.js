var num1 =parseFloat( prompt("Enter your First Number : "));
var num2 =parseFloat( prompt("Enter your second Number : "));
var num3 =parseFloat( prompt("Enter your Third Number : "));

if(num1>num2 && num1>num3){
    document.write("Learge Number is :" + num1)
}
 else if(num2>num1 && num2>num3){
    document.write("Learge Number is :" + num2)
}
else{
    document.write("Learge Number is :" + num3)
}