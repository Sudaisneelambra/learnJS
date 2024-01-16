let s='IX'

let input=s.split("")
console.log(input);
let rom=["I","V","X","L","C","D","M"]
let int=[1,5,10,50,100,500,1000]
let out=0

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < rom.length; j++) {
       
        if(input[i]==rom[j])
        {
            out=out+int[j]
        }
        
    }
    
}

console.log(out);

// let a=10
// {
//    let a =12
//     console.log(a);
// }

// console.log(a);