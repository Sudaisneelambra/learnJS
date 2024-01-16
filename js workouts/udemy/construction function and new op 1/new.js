const Person=function(fname,DOB){
    this.name=fname
    this.DOB=DOB



    this.calcAge=function(){
        console.log(2023-this.age);
    }



    console.log(this);
}





const sudais=new Person("sudais",2003)
const shefin=new Person("shafin",2001)
console.log(sudais);
console.log(shefin);

console.log(sudais instanceof Person );


//1. new means it creates new object like   person={}
//2. function called ,this ={}
//3. {} linked to prototype
//4. 