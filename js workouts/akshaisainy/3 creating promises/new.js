

// // const cart=["shoe",'pants',"shorts"]


// //  const promise = createOrder(cart)   //return orderId

// //  promise.then(function(orderId){

// //     console.log(orderId);
// //     // proceedToPayment(orderId)

// //  })

// // .catch(function(err){
// //     console.log(err.message);
// // })

// // // creat order function


// // function createOrder(cart)
// // {
// //     const pr= new Promise(function(resolve,reject)
// //     {
// //         if(!validateCart(cart))
// //         {
// //             const err =new Error("cart is not valid")
// //             reject(err)
// //         } 
// //         const orderId="12345"
// //         if(orderId)
// //         {
// //             setTimeout(function(){
// //                 resolve(orderId)
// //             }, 4000);
// //         }
// //     })


// //     return pr
        
// // }

// // function validateCart(cart){

// //     // return true
// //     return false
    
// // }







// // complicated

  

// const cart=["shoe",'pants',"shorts"]


// createOrder(cart)
//  .then(function(orderId){
//     console.log(orderId);
//     return orderId
//  })
//  .catch(function(err){
//     console.log(err.message);
// })
//  .then(function(orderId){
//    return proceedToPayment(orderId)
//  })
//  .then(function(paymentInfo)
//  {
//     console.log(paymentInfo); 
//  })

// .catch(function(err){
//     console.log(err.message);
// })
// .then(function(orderId){
//     console.log("no matter what happen i will deffinitily be called");
//  })



// // creat order function


// function createOrder(cart)
// {
//     const pr= new Promise(function(resolve,reject)
//     {
//         if(!validateCart(cart))
//         {
//             const err =new Error("cart is not valid")
//             reject(err)
//         } 
//         const orderId="12345"
//         if(orderId)
//         {
//             setTimeout(function(){
//                 resolve(orderId)
//             }, 4000);
//         }
//     })


//     return pr
        
// }

// function proceedToPayment(orderId){

//     return new Promise(function(resolve,reject)
//     {
//         resolve("payment successfull")
//     })
// }

// function validateCart(cart){

//     // return true
//     return false
    
// }





// // GPT example



// // This function returns a promise - a promise to give you a video game.
// function askFriendForGame() {
//     // Imagine this is like your friend looking for the game.
//     let foundGame = Math.random() > 0.5; // 50/50 chance of finding the game.
  
//     return new Promise((resolve, reject) => {
//       if (foundGame) {
//         resolve("Great! Here's your video game.");
//       } else {
//         reject("Sorry, couldn't find the game. Maybe next time?");
//       }
//     });
//   }
  
//   // Now, you want to use the promise and handle what happens.
  
//   askFriendForGame()
//     .then((successMessage) => {
//       // If everything goes well, this part runs.
//       console.log(successMessage);
//     })
//     .catch((errorMessage) => {
//       // If something goes wrong, this part runs.
//       console.log(errorMessage);
//     });
  



//     // another example



//     // Function returning a promise to simulate some async operation
// function asyncOperation(value) {
//     return new Promise((resolve, reject) => {
//       // Simulating an asynchronous operation (e.g., fetching data)
//       setTimeout(() => {
//         if (Math.random() > 0.2) {
//           resolve(value);
//         } else {    
//           reject(`Error: ${value}`);
//         }
//       }, 1000); // Simulating a delay of 1 second
//     });
//   }
  
//   // Creating an array of promises
//   const promises = [
//     asyncOperation('Promise 1'),
//     asyncOperation('Promise 2'),
//     asyncOperation('Promise 3')
//   ];
  
//   // Using Promise.all to wait for all promises to settle
//   Promise.all(promises)
//     .then((results) => {
//       console.log('All promises resolved:', results);
//     })
//     .catch((error) => {
//       console.error('At least one promise was rejected:', error);
//     });

// let a =new Promise((res,rej)=>{
//   res("resolvedhdxbxfhndjxte")
// })

// console.log(a)
// a.then((e)=>{
//   console.log(e)
// })



function start(){
  return new Promise((res,rej)=>{
    let a=10
    res(a)
  })
}

function middle(d){
  return new Promise((res,rej)=>{
    res(d*12)
  })
}

function end(g){
  return new Promise((res,rej)=>{
    res(g+100)
  })
}


// console.log(start());
start()
.then((e)=>{
  console.log(e);
  return middle(e)
})
.then((e)=>{
  console.log(e);
  return end(e)
})
.then((e)=>{
  console.log(e);
})
