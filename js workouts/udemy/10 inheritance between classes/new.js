
class Person {
    constructor(firstname, birthyear) {

            this._firstname = firstname,
            this._birthyear = birthyear;

    }
    introduce(){
        console.log(`my name is ${this._firstname} and a i study in ${this.cource}`);
       }
       calcage(){
        console.log(2023-this._birthyear);
       }
}





class Students extends Person 
{
   constructor(firstname,birthyear,cource)
   {
        super(firstname,birthyear)
        this.cource=cource;  
   }
   introduce(){
    console.log(`my name is ${this._firstname} and a i study in ${this.cource}`);
   }

   calcage(){
    console.log(`i am ${2037-this._birthyear} year old,`);
   }
}

// const martha =new Students("martha",2021)

const martha =new Students("martha",2001,"commerce")
martha.introduce()
martha.calcage()