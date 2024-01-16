var fizzBuzz = function(n) {
 let p=[]
    for(let i=1;i<=n;i++)
    {
        if(i % 3===0 && i % 5 === 0)
        {
             p.push("FizzBuzz");
         
        }
        else if (i % 3 === 0) {
                p.push("Fizz");
            }
        else if(i%5==0)
        {
            p.push("Buzz")
        }
        else
        {
            p.push(i.toString())
         
        }
    }

    return p
    
};

console.log(fizzBuzz(17));

