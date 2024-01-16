

let a=[1,2,3,4,5,6,7,8,9,10]


const b=a.filter((e)=>{
    return e==4 ||e==5
})

console.log(b);
console.log(a);


let c=[1,2,3,4,5,6,7,8,9,10]


const d=a.map((e)=>{
    return e*2
})

console.log(c);
console.log(d);