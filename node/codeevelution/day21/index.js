const Event=require("node:events")

const one=new Event()

one.on("order-placed",(size,flavour)=>{
    console.log(`order recieved ! the ${size} pizza with ${flavour} is on process`);
})



one.emit("order-placed","large","chicken")