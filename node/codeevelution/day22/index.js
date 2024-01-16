

// const one=require("./pizz")

// const pizzashop=new one()

// pizzashop.order()
// pizzashop.displayorder()

// event emitter method


const one=require("./pizz")
const two=require("./drink")

const pizzashop=new one()
const drink=new two()

pizzashop.on("order",(size,flavour)=>{
    console.log(`order recieved ! the ${size} pizza with ${flavour} is on process`)
    drink.serve(size)
})

pizzashop.order("large","beef")
pizzashop.displayorder()

