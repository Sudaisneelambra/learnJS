

const car=function(make,speed){
    this.make=make;
    this.speed=speed
};


car.prototype.accelerate= function(){
    this.speed+= 10
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

car.prototype.break= function(){
    this.speed-= 5
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const Ev=function(make,speed,charge){

    car.call(this,make,speed)
    this.charge=charge

}

Ev.prototype=Object.create(car.prototype)

Ev.prototype.chargebettery= function(chargeto){

    this.charge=chargeto;
}

Ev.prototype.accelerate = function(){
    this.speed+= 20
    this.charge --
    console.log(`${this.make} is going at ${this.speed} km/h, with charge ${this.charge}` );
}

const tesla = new Ev ("tesla",120,30)


tesla.chargebettery(90)
console.log(tesla);

tesla.break()
tesla.accelerate()