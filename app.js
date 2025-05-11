for (let i = 0; i < 100; i++){

//stampa i numeri da 1 a 100
    
// console.log(i+1)

let mlt3 = (i+1)%3

let mlt5 = (i+1)%5


//IF i è un multiplo di 3
if(mlt3=0)
    //stampa Fizz
console.log("Fizz")

//ELSE IF i è un multiplo di 5

else if(mlt=0)
    //stampa Buzz
console.log("Buzz")

//ELSE IF i è un multiplo sia di 3 che di 5
else if(mlt3=0 && mlt5=0)
    //stampa FizzBuzz
console.log("FizzBuzz")
//ELSE se non è nultiplo né di 3 né di 5
else
console.log(i+1)
    //stampa i
}