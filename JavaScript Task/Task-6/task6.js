var i = 1;
var sum = 0;
while(i<=200){
    if(i%3==0 && i%5==0){
        sum = sum +i;
        document.write("Result="+i);
    }
    
    i++;
}
document.write(sum);