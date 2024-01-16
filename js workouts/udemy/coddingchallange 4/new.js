

const Car= function(make,speed){

    this.make=make;
    this.speed=speed;

}

Car.prototype.accelarate=function(){
    this.speed=this.speed+10
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.break=function(){
    this.speed=this.speed-5
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw =new Car("BMW",120)
const audi =new Car("audi",140)

bmw.accelarate()
bmw.accelarate()
bmw.break()
bmw.accelarate()


audi.accelarate()
audi.accelarate()
audi.break()
audi.break()
audi.accelarate()

