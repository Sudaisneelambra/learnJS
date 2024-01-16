











// Remote-controlled car class
class RemoteControlCar {
    // Internal properties (details hidden)
    _engineStatus = "Off";
    _direction = "Forward";
  
    // Abstraction: You don't need to know how it works inside!
    pressForwardButton() {
      this._direction = "Forward";
      console.log("Car is moving forward");
    }
  
    pressBackwardButton() {
      this._direction = "Backward";
      console.log("Car is moving backward");
    }
  
    turnLeft() {
      console.log("Car is turning left");
    }
  
    turnRight() {
      console.log("Car is turning right");
    }
  
    // Abstraction: You don't need to know how it works inside!
    powerOn() {
      this._engineStatus = "On";
      console.log("Car engine is ON");
    }
  
    powerOff() {
      this._engineStatus = "Off";
      console.log("Car engine is OFF");
    }
  }
  
  // Using the remote-controlled car
  const myCar = new RemoteControlCar();
  
  // You can control the car without knowing the internal details
  myCar.powerOn();          // Output: "Car engine is ON"
  myCar.pressForwardButton();// Output: "Car is moving forward"
  myCar.turnLeft();         // Output: "Car is turning left"
  myCar.pressBackwardButton();// Output: "Car is moving backward"
  myCar.turnRight();        // Output: "Car is turning right"
  myCar.powerOff();         // Output: "Car engine is OFF"
  