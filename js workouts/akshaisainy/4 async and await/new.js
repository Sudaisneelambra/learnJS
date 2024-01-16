
            // async function getData(){
                
                
            //     return "sudais"
            // }

            // const manpromise=getData()

            // console.log(manpromise);


            // manpromise.then((res)=> console.log(res))


// step two


            // const love=new Promise((resolve,reject) =>{
            //         resolve("promise resolve value!!")
            // })


            // function getData(){
            //     love.then((res)=> console.log(res))
            // }

            // getData()



// strep three


            // const love=new Promise((resolve,reject) =>{
            //     resolve("promise resolve value!!")
            // })



            // async function handlePromise(){
            //     const val = await love;

            //     console.log(val);
            // }



            // handlePromise()


//  step four


                    // const love=new Promise((resolve,reject) =>{
                    //     setTimeout(function(){
                    //         resolve("promise resolve value!!")
                    //     },10000)
                    // })

                    // // console.log(love);

                    // async function handlePromise(){
                      

                    //   console.log("namasrthe java script");

                    //     const val = await love;

                    //     console.log("namasrthe java script");

                    //     console.log(val);

                    // }


                    // handlePromise()




//  step five


                              // const love=new Promise((resolve,reject) =>{
                              //   setTimeout(function(){
                              //       resolve("promise resolve value!!!!!!!!!")
                              //   },8000)
                              // })
                              

                              // const love1=new Promise((resolve,reject) =>{
                              //   setTimeout(function(){
                              //       resolve("promise resolve value...............!!")
                              //   },4000)
                              // })

                              // setTimeout(function(){
                              //   console.log("sudais")
                              // },4000)

                              // // console.log(love);

                              // async function handlePromise(){
                              

                              // console.log("namasrthe java script");

                              //   const val = await love;
                              //   console.log("namasrthe ");

                              //   console.log(val);


                              //   const val1 = await love1;
                              //   console.log("namasrthe java ");

                              //   console.log(val1); 
                                

                              // }



                              // handlePromise()

                              // console.log("bird without brain");


                              // function getData(){
                              //     love.then((res)=> console.log(res))
                              //     console.log("namasrthe java script wanted");
                              // }

                              // getData()




// GPT EXAMPLE



                  // function delay(ms) {
                  //     return new Promise(resolve => setTimeout(resolve, ms));
                  //   }
                    
                  //   async function communicateWithPlanet(name, delay) {
                  //     console.log(`Sending a message to ${name}...`);
                  //     await delay(delay);
                  //     console.log(`Received a response from ${name}!`);
                  //   }
                    
                  //   async function main() {

                  //     console.log("Mission start!");
                    
                  //     // Imagine these are two planets you're talking to
                  //     await communicateWithPlanet("Mars", 2000); // 2000 milliseconds (2 seconds)
                  //     await communicateWithPlanet("Jupiter", 3000); // 3000 milliseconds (3 seconds)
                    
                  //     console.log("Mission complete!");
                  //   }
                    
                  //   // Run the mission
                  //   main();
  
// REAL WORLD EXAMPLE

                    //  let apiurl="http://api.github.com/users/akshaymarch7";
                    // async function handle(){
                      
                    //   // method of using await


                    //   const sin=await fetch(apiurl)
                    //   const jsonsin=await sin.json()


                    //   // normal method


                    //   fetch(apiurl).then(res => res.json()).then(res=> console.log(res))
                      
                    //   console.log(jsonsin);
                      

                    // }
                    
                    // handle()



// error handling



                      // let apiurl="http://api.github.com/users/akshaymarch7";
                      // // let apiurl="http://api.github.c";   //error tym
                      // async function handle(){
                        
                      //   // method of using await


                      //   try{

                      //     const sin=await fetch(apiurl)
                      //     const jsonsin=await sin.json()
                      //     console.log(jsonsin);

                      //   }

                      //   catch(err){
                      //     console.log("erruuuuuuuuuuuu"+err.message);
                      //   }
                        

                      // }

                      // handle()




              // let apiurl="http://api.github.com/users/akshaymarch7";
              // // let apiurl="http://api.github.c";   //error tym
              // async function handle(){
                
              //   // method of using await

              //   try {
                  
              //     const sin=await fetch(apiurl)

              //     // if(!sin?.userId?.length) {
              //     //   throw new Error('data not found');
              //     // }

              //     console.log(sin.userId.length);
              //     const jsonsin=await sin.json()
              //     console.log(jsonsin);
              //   } catch (err) {
              //     console.log(err.message);
              //     console.log('error')
              //   }

                
                

              // }

              // handle()
              // .catch(err => console.log("errrorrrrrrrrrrrrrrrrr"))



// mattta example


// function getBread(callback) {
//   setTimeout(function () {
//     console.log('Got the bread!');
//     callback();
//   }, 1000);
// }
// function spreadPeanutButter(callback) {
//   setTimeout(function () {
//     console.log('Spread the peanut butter!');
//     callback();
//   }, 1000);
// }
// function spreadJelly(callback) {
//   setTimeout(function () {
//     console.log('Spread the jelly!');
//     callback();
//   }, 1000);
// }
// function assembleSandwich() {
//   console.log('Assembling the sandwich. Done!');
// }
// getBread(function () {
//   spreadPeanutButter(function () {
//     spreadJelly(function () {
//       assembleSandwich();
//     });
//   });
// });
// getBread()







// function getBread() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log('Got the bread!');
//       resolve();
//     }, 1000);
//   });
// }

// function spreadPeanutButter() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log('Spread the peanut butter!');
//       resolve();
//     }, 1000);
//   });
// }

// function spreadJelly() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log('Spread the jelly!');
//       resolve();
//     }, 1000);
//   });
// }

// function assembleSandwich() {
//   console.log('Assembling the sandwich. Done!');
// }

// getBread()
//   .then(() => spreadPeanutButter())
//   .then(() => spreadJelly())
//   .then(() => assembleSandwich())
//   .catch(error => console.error('Error:', error));


  


//  function getBread() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('Got the bread!');
//       resolve();
//     }, 1000);
//   });
// }

// function spreadPeanutButter() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('Spread the peanut butter!');
//       resolve();
//     }, 1000);
//   });
// }

// function spreadJelly() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('Spread the jelly!');
//       resolve();
//     }, 1000);
//   });
// }

// function assembleSandwich() {
//   console.log('Assembling the sandwich. Done!');
// }

// async function makeSandwich() {
//   try {
//     await getBread();
//     await spreadPeanutButter();
//     await spreadJelly();
//     assembleSandwich();
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// makeSandwich();




function getBread() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Got the bread!');
    }, 1000);
  });
}

function spreadPeanutButter() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Spread the peanut butter!');
    }, 3000);
  });
}

function spreadJelly() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Spread the jelly!');
    }, 5000);
  });
}

function assembleSandwich() {
  console.log('Assembling the sandwich. Done!');
}

// getBread()
//   .then((err) => {console.log(err)
//    return spreadPeanutButter()
//   })
//   .then((nn) => {
//     console.log(nn);
//     return spreadJelly()
//   })
//   .then((nn) => {
//     console.log(nn);
//      assembleSandwich()
//   })
  // .catch(error => console.error('Error:', error));

  async function x(){
    let man=await getBread()
    console.log(man);
    let sin=await spreadPeanutButter()
    console.log(sin);

    let shin =await spreadJelly()
    console.log(shin);

    assembleSandwich()
  

  }
  x()


