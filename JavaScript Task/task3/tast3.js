var num1 = prompt('Enter your first number:');
var num2 = prompt('Enter your first number:');


num1 = parseInt(num1,10);
num2 = parseInt(num2,10);

var sub,sum,maltifly, division,modilus;


 sub =num1 + num2;
 document.write("Addition:" + sub + "<br/>");

 sum = num1 - num2;
 document.write("substraction:" + sum + "<br/>");

 document.write("addition:" +num1 + "+" + num2 + "=" + sub + "<br/>" );

 sum = num1 - num2;
 document.write("Substraction:" +num1 + "-" + num2 + "=" + sum + "<br/>" );

 
 maltifly = num1 * num2;
 document.write("maltifley:" +num1 + "*" + num2 + "=" + maltifly + "<br/>" );

 
 division = num1 / num2;
 document.write("division:" +num1 + "/" + num2 + "=" + division + "<br/>" );


 modilus = num1 % num2;
 document.write("modiulus:" +num1 + "%" + num2 + "=" + modilus + "<br/>" );

