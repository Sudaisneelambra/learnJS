//Constructor function

let Person = function(name, gender, birthYear){
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
    }


    Person.prototype.calcAge = function(){
    let age = new Date().getFullYear() 
    console.log(age); - this.birthYear;
    };

    Person.prototype.city="london"



    let john = new Person('John', 'Male', 1990);
     //john.calcAge()
    console.log(john);
    let merry = new Person('Merry', 'Female', 1995);
    //merry.calcAge();
    console.log(merry);
    let steve = new Person('Steve', 'Male', 1989);
    //steve.calcAge();
    console.log(steve);