//JavaScript Program to Perform Function Overloading

function sum(){
    if(arguments.length==0){
        console.log("pass two arguments")
    }
    else if (arguments.length==1){
        console.log("Pass at least two arguments")
    }else{
        let result=0;
        let lengths=arguments.length;
        for(i=0; i<lengths; i++){
            result=result+arguments[i]  //sumation of n numbers
            
        }
        console.log(result)

    }
}
sum()
sum(1)
sum(2,3,6)