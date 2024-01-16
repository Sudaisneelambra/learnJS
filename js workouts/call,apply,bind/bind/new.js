const obj={
    name:"sudais",
    age:"21",
    fn:function(){
        console.log(this.name)
    }
}


obj.fn()
let man=obj.fn
man()

let sin=obj.fn.bind(obj)
sin()