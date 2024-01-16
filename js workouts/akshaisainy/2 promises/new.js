
// const cart=["sheo","pants","shorts"]

// createOrder(cart ,function(orderId){

//     proceedToPayment(orderId); 

// }); 

// const promise=createOrder(cart);

// //  { data: undifined }

// promise.then(function(orderId){

    
//     proceedToPayment(orderId); 


// })


createOrder(cart)
.then(function(orderId){
   return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return orderSummery(paymentInfo);
})
.then(function(){
    return updateWalletBalance(paymentInfo);
})


 
//  in arrow function


createOrder(cart)
.then((orderId) => proceedToPayment(orderId))
.then((paymentInfo) =>orderSummery(paymentInfo))
.then((paymentInfo) => updateWalletBalance(paymentInfo));







const GITHUB_API = "http://api.github.com/users/akshaymarch7"

const user = fetch(GITHUB_API)

console.log(user);
 


// user.then(function(data){

//     console.log(data);
// })






