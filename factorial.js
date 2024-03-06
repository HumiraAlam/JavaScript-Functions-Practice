//find factorial of a number using recursion

function factorial(num){
    
    for(i=num-1; i>=1; i--){
        
        num*=i
    }
    console.log(num);

}
factorial(4);