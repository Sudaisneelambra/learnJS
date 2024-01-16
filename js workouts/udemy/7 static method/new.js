const Person=function(fname,DOB){
    this.name=fname
    this.DOB=DOB

}



const sudais=new Person("sudais",2001)
const shefin=new Person("shafin",2001)


Person.hey=function(){
    console.log("hey there");
    console.log(this);
}

Person.hey()






class PersonCl {
     
    constructor(fname,birthYear){

        this.fullname=fname;
        this.birthYear=birthYear

    }


    // method will be added to .prototype property
    // calcage(){
    //     console.log(2021-this.birthYear);
    // }

    get age(){
        return 2023-this.birthYear
    }

    set fullname(name){
        console.log(name);
        
        if(name.includes(' ')) this._fullname=name
        else alert(`${name} is not full name`)

    }

    get fullname(){
        return this._fullname
    }
    // static method

    static hey(){
        console.log("hey there");
        console.log(this);
    }
}


const water= new PersonCl ("water wide",1874)



const sudai=new PersonCl("sudai anuz",2001)

PersonCl.hey()


console.log(sudai.fullname);

console.log(sudai.age)

console.log(sudai);