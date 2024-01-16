// class expression

// const personCl =class {}

// class decleration

class PersonCl {
     
    constructor(fname,birthYear){

        this.name=fname;
        this.birthYear=birthYear

    }


    // method will be added to .prototype property
    calcage(){
        console.log(2021-this.birthYear);
    }
}

PersonCl.prototype.great=function()
{
    console.log(`hellow ${this.name}`);
}


const sudais=new PersonCl("sudais",2001)

sudais.great()

sudais.calcage()

console.log(sudais);