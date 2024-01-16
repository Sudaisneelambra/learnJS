const Person=function(fname,DOB){
    this.name=fname
    this.DOB=DOB

    // never create a method in a constructor function

    // this.calcAge=function(){
    //     console.log(2023-this.age);
    // }



    // console.log(this);
}

console.log(Person.prototype);

Person.prototype.calcAge=function(){
    console.log(2023-this.DOB);
}


const sudais=new Person("sudais",2001)
const shefin=new Person("shafin",2001)

sudais.calcAge()


console.log(sudais);
console.log(shefin);

console.log(sudais instanceof Person );

Person.prototype.species='Homo Sapiends'

console.log(sudais.species,shefin.species);

console.log(sudais.hasOwnProperty('name'));

console.log(sudais.hasOwnProperty('species'));


//1. new means it creates new object like   person={}
//2. function called ,this ={}
//3. {} linked to prototype
//4. 