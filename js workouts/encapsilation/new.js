// let salery=30000
// let overtime =10
// let rate =20

// function getwage(bssalery,overtym,rate)
// {
//     return bssalery+(overtym*rate)
// }

// let employee={
//     baseSalery:40000,
//     overTime:10,
//     rate:20,
//     getwage:function(){
//         return this.baseSalery+(this.overTime* this.rate)
//     }
// }

// employee.getwage()

// ----------------------------------------------------

// const circle = {
        
//     radius: 1,
//     location: {
//     x: 1,
//     y: 1
//     },

//     draw: function() {
//     console.log('draw');
// }

// };




// circle.draw()




// ----------------------------------------------------

// factory function

// function createone(radius){


//     return {
        
//         radius,
//         draw: function(){
//             console.log("drawing");
//         }
    
//     };
// }
// const circles=createone(1)


// circle.draw()


// ----------------------------------------------------


// constructor function

// function circle (radius){

//     console.log(this);
    
//     this.radius=radius
//     this.draw=function(){
//         console.log("drawed");
//     }
// }


// const another = new circle(1)

// console.log(another);



// ----------------------------------------------------

// let x={};

// new Boolean();
// new Number();


// ---------------------------------------------------- 



function circle (radius){


    
    this.radius=radius
    this.draw=function(){
        console.log("drawed");
    }
}



const another = new circle(1)




// ---------------------------------------------------- 