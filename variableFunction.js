//JavaScript Program to Check If a Variable is of Function Type

function testVariable(variable){
    if(typeof variable ==='Function')// or this condition can also be uses (variable instanceof Function)
    {
        console.log("variable is a function")
    }
    else{
        console.log("variable is not a function")
    }

    }
    const count= true;
    const myCity= function (){
        console.log("Gothenburg")
    };
testVariable(count)
testVariable(myCity)
