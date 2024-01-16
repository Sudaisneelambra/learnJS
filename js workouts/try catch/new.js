
// console.log(divide(10, 2));  // Outputs: 5
// console.log(divide(8, 0));   // Outputs: Error: Division by zero is not allowed, Division operation completed.



// function divide(a, b) {
// try {
//         if (b === 0) {
//             throw new Error('Division by zero is not allowed');
//         }
//         return a / b;
//     } catch (error) {
//         console.error('Error:', error.message);
//         return 'Undefined';
//     } finally {
//         console.log('Division operation completed.');
//     }
// }












function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

try {
    // let result = divide(10, 2);
    // console.log('Result:', result);

    result = divide(5, 0); // This will throw an exception
    console.log('This will not be reached')
} catch (error) {
    console.error('An error occurred:', error.message);
} finally {
    console.log('This will always be executed.');
}


function abcf(a,b){
    if(a==0){
        throw new Error('errrrrrrr')
    }
    let c=a+b
    console.log(c);
}


try{
    abcf(80,18)
   
}catch(errr){
    console.error('an error occured',errr.message);
}finally{
    console.log('completed');
}
// abcf(0,12)