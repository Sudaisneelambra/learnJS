

const PersonProto={
    calcAge(){
        console.log(2037-this.birthYear);
    },

    init(firstname,birthYear)
    {
        this.firstname=firstname
        this.birthYear=birthYear
    },
}

const steve =Object.create(PersonProto);


const studentsproto =Object.create(PersonProto)




studentsproto.init =function(firstname,birthYear,cource)
{
    PersonProto.init.call(this,firstname,birthYear);
    this.cource=cource
}



const jay=Object.create(studentsproto)


studentsproto.indroduce=function(){
    console.log(`my name is ${this.firstname} and i study ${this.cource}`);
}

jay.init("jay",2010,"computer commmerce")

jay.indroduce()
jay.calcAge()
