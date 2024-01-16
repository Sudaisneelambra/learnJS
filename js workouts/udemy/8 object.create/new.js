

class Person {
    constructor(fname,DOB){
    this.name=fname
    this.DOB=DOB



}

calcAge(){
    console.log(2023-this.DOB);
}
}

const personProto={

    calcAge(){
        console.log(2023-this.DOB);
    },

    
    init(fname,DOB){
        this.fname=fname,
        this.DOB=DOB

    }
}


const anuz=Object.create(personProto)
anuz.name="anuz"
anuz.DOB=2002
anuz.calcAge()
console.log(anuz);


const cheryon=Object.create(personProto)


cheryon.init("cheryon",2002)
console.log(cheryon);

cheryon.calcAge()