const Person=function(firstname,birthyear){
    this.firstname=firstname,
    this.birthyear=birthyear

}

Person.prototype.calcage=function(){
    console.log(2023-this.birthyear);
}


const student =function(name,birth,cource){

    // this.name=name;
    // this.birth=birth;
    // this.cource=cource

    Person.call(this,name,birth);
    this.cource=cource

}

student.prototype =Object.create(Person.prototype)


student.prototype.indtroduce=function(){
console.log(`my name is ${this.firstname} and i am studying ${this.cource}`);
}


const mike=new student("mike",2022,"science")


console.log(mike.firstname);
console.log(mike);
mike.indtroduce()
mike.calcage()

console.log(mike instanceof student);


console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);