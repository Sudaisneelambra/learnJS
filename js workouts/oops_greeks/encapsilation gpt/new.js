// TV remote control class
class TVRemote {
    // Convention: Prefix private properties with an underscore
    _powerOn = false;
  
    // Public method to turn the TV on
    turnOn() {
      this._powerOn = true;
      console.log("TV is ON");
    }
  
    // Public method to turn the TV off
    turnOff() {
      this._powerOn = false;
      console.log("TV is OFF");
    }
  
    // Public method to change the channel
    changeChannel(channel) {
      if (this._powerOn) {
        console.log("Changing to channel", channel);
      } else {
        console.log("Please turn on the TV first");
      }
    }
  }
  
  // Using the TV remote control
  const myRemote = new TVRemote();
  
  // You can't access or modify the private property directly
  // Uncommenting the line below won't result in an error, but it's a convention to treat it as private
  // console.log(myRemote._powerOn);
  
  // You can use the public methods to interact with the TV
  myRemote.turnOn(); // Output: "TV is ON"
  myRemote.changeChannel(5); // Output: "Changing to channel 5"
  myRemote.turnOff(); // Output: "TV is OFF"
  myRemote.changeChannel(8); // Output: "Please turn on the TV first"
  