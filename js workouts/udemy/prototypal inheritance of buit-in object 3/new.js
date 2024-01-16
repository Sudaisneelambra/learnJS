const Person=function(fname,DOB){
    this.name=fname
    this.DOB=DOB

}

console.log(Person.prototype);

Person.prototype.calcAge=function(){
    console.log(2023-this.DOB);
}


const sudais=new Person("sudais",2001)
const shefin=new Person("shafin",2001)

sudais.calcAge()


// console.log(sudais);
// console.log(shefin);

console.log(sudais instanceof Person );

Person.prototype.species='Homo Sapiends'

console.log(sudais.species,shefin.species);

console.log(sudais.hasOwnProperty('name'));

console.log(sudais.hasOwnProperty('species'));

console.log(sudais.__proto__);
console.log(sudais.__proto__.__proto__);
console.log(sudais.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr=[1,23,3,4,5,2]

console.log(arr.__proto__);


console.log(arr.__proto__===Array.prototype);

Array.prototype.unique=function(){
    return [...new Set(this)]

   
}

console.log(arr.unique());