//guess a random number
function guessRandon(num){
const random= Math.floor(Math.random()*10)+1;
//console.log(random);


if (random==num){
    console.log(random)
}else{
    console.log("guess again")
}

}
guessRandon(2)
