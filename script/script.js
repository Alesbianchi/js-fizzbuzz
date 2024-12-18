
// stampo i numeri da 1 a 100
for (let i = 1; i <= 100; i++){
    // SE multipli di 3 e 5
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    
    // SE ALTRIMENTI multipli di 5
    } else if(i % 5 === 0){
        console.log("Buzz");
    
    // SE ALTRIMENTI multipli di 3
    } else if(i % 3 === 0){
        console.log("Fizz");

    //ALTRIMENTI stampo normale
    } else {
        console.log(i);
    }
    
}

