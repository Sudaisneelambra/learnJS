// class Pizz{
//     constructor(){
//         this.orderno=0
//     }
//     order(){
//         this.orderno++
//     }
//     displayorder(){
//         console.log(`current order number is ${this.orderno}`);
//     }
// }
// module.exports=Pizz

// using event emitter

const EventEmitter=require("node:events")

class Pizz extends EventEmitter{
    constructor(){
        super()
        this.orderno=0
    }
    order(size,flavour){
        this.orderno++
        this.emit("order",size,flavour)
    }
    displayorder(){
        console.log(`current order number is ${this.orderno}`);
    }
}
module.exports=Pizz