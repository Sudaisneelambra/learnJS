

const accoount={
    owner:'jhones',
    movement:[200,300,234,250],

   get latest(){
    return this.movement.slice(-1).pop();
    },
    set latest(mov){
        return this.movement.push(mov)
    }
}



console.log(accoount.latest);

accoount.latest=60

console.log(accoount.movement);




// setter

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
}


const water= new PersonCl ("water wide",1874)



const sudais=new PersonCl("sudais anuz",2001)


console.log(sudais.fullname);

console.log(sudais.age)

console.log(sudais);