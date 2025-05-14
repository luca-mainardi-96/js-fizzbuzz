for (let i = 0; i < 100; i++){

const n = (i+1)

let mlt3 = (n)%3

let mlt5 = (n)%5


if(mlt3==0 && mlt5==0)
    
    console.log("FizzBuzz")

else if(mlt5==0)
    
    console.log("Buzz")

else if(mlt3==0)

    console.log("Fizz")

else

    console.log(n)
    
}