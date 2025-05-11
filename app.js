for (let i = 0; i < 100; i++){

let mlt3 = (i+1)%3

let mlt5 = (i+1)%5


if(mlt3==0 && mlt5==0)
    
    console.log("FizzBuzz")

else if(mlt5==0)
    
    console.log("Buzz")

else if(mlt3==0)

    console.log("Fizz")

else

    console.log(i+1)
    
}