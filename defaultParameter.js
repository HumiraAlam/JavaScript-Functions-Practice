//JavaScript Program to Set a Default Parameter Value For a Function

function sum(num1=3, num2=4){
    return num1+num2;

}
console.log(sum());      //taking default value
console.log(sum(2,5));      //taking argumen value
console.log(sum(1));        //for num1 taking argument value for num2 taking default value