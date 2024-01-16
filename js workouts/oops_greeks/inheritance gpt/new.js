// The base class
class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    start() {
      return "Engine is starting...";
    }
  
    stop() {
      return "Engine is stopping...";
    }
  }
  
  // The derived class (inherits from Vehicle)
  class Car extends Vehicle {
    constructor(make, model, numDoors) {
      // Call the constructor of the base class (Vehicle)
      super(make, model);
  
      this.numDoors = numDoors;
    }
  
    honk() {
      return "Beep beep!";
    }
  }
  
  // Another derived class (also inherits from Vehicle)
  class Bicycle extends Vehicle {
    constructor(make, model, type) {
      // Call the constructor of the base class (Vehicle)
      super(make, model);
  
      this.type = type;
    }
  
    ringBell() {
      return "Ring ring!";
    }
  }
  
  // Using the classes
  const myCar = new Car("Toyota", "Camry", 4);
  console.log(myCar.start());  // Output: "Engine is starting..."
  console.log(myCar.honk());   // Output: "Beep beep!"
  
  const myBicycle = new Bicycle("Schwinn", "Cruiser", "Mountain");
  console.log(myBicycle.start());  // Output: "Engine is starting..."
  console.log(myBicycle.ringBell());// Output: "Ring ring!"
  