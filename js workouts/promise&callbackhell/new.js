// let man=new Array(1,2,3,4)

// console.log(man)

// function one(callbacko){
//   setTimeout(function(){
//         console.log("one")
//         let d=10
//         callbacko(d)
//   },1000)
// }

// function two(d,callbackt){
//   setTimeout(function(){
//         console.log("two")
//         console.log(d)
//         callbackt()
//   },1000)
// }

// function three(){
//   setTimeout(function(){
//         console.log("three")
//   },1000)
// }
// one(function(d){
//     two(d,function(){
//         three()
//     })
        
// })

function one() {
    return new Promise((resolve) => {
      setTimeout(function () {
        let d = 10;
        resolve(d);
      }, 1000);
    });
  }
  
  function two(d) {
    return new Promise((resolve) => {
      setTimeout(function () {
        console.log(d);
        resolve();
      }, 1000);
    });
  }
  
  function three() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve();
      }, 1000);
    });
  }
  
  one()
    .then((d) => two(d))
    .then(() => three())
    .catch((error) => console.error("Error:", error));
  
  
  
  