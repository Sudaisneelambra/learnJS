

// normal function

            function x( a,b,c){
                return a+b+c
            }
            console.log(x(4,5,6));

// currying function

            function currying(first){
                return function(second){
                    return function(thired){
                        return first+second+thired
                    }
                }
            }

            console.log(currying(34)(4)(6));

// another example of currying       



            function curry(fn) {
                return function curried(arg1) {
                return function(arg2) {
                    return fn(arg1, arg2);
                };
                };
            }
            
            
            function add(a, b) {
                return a + b;
            }
            
            
            const curriedAdd = curry(add);
            
            
            const result = curriedAdd(1)(2);
            
            console.log(result); 
 
            
// memoization



            // // Currying function
            // function curry(fn) {
            //   return function curried(arg1) {
            //     return function(arg2) {
            //       return fn(arg1, arg2);
            //     };
            //   };
            // }

            // // Example function to be curried
            // function add(a, b) {
            //   return a + b;
            // }

            // // Curry the add function
            // const curriedAdd = curry(add);

            // // Use the curried function
            // const result = curriedAdd(1)(2);

            // console.log(result); // Output: 3


            // function fibonacci(n) {
            //   if (n <= 1) {
            //     return n;
            //   }
            
            //   return fibonacci(n - 1) + fibonacci(n - 2);
            // }

            // console.log(fibonacci(9))


// Memoization cache


                        const memo = {};

                        function square(n) {

                        // console.log(memo[n])
                        if (memo[n] !== undefined) {
                            console.log(`Using memo for ${n} = ${memo[n]}`);
                            // return memo[n];
                        }


                        const result = n * n;
                        memo[n] = result;
                        console.log(`Calculating square for ${n}= ${result}`);
                        console.log(memo)
                        // return result;
                        }

                        // Example usage
                        square(3); // Output: Calculating square for 3, 9
                        square(4); // Output: Calculating square for 4, 16
                        square(3); // Output: Using memo for 3, 9 (no recalculation)
                        // console.log(square(5)); // Output: Calculating square for 5, 25
                        // console.log(square(4)); // Output: Using memo for 4, 16 (no recalculation)


let mar={
    names:"sudais",
    age:21
}

mar['names']="shinu"
console.log(mar);