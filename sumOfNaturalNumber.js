//find sum of natural numbers using recursion
//5

//5+4+3_+2


function sumOfNaturalNumber(num){
    let sum=0;
    if(num>0){
        for(i=num;i>=1;i--){
            sum+=i;     
        }
        console.log(sum);

    }else{
        console.log("Please provide valid Number")
    }

}
sumOfNaturalNumber(5)