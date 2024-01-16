



class Car{
    constructor(make,speed){

    this.make=make;
    this.speed=speed;

}


accelarat(){
    this.speed=this.speed+10
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

break(){
    this.speed=this.speed-5
    console.log(`${this.make} is going at ${this.speed} km/h`);
}


get speedUS(){
    return this.speed/1.6
}


set speedUS(speed){
    this.speed=speed*1.6

}
}
const ford =new Car("ford",120)

console.log(ford.speedUS);

ford.speedUS=50

console.log(ford);
ford.accelarat()
