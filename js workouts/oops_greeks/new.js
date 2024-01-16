//  object letterals
// Example: Using an Object Literal.


            let person = {
                first_name: 'Risvan ',
                last_name: 'musliyarakath',

                //method

                getFunction: function () {
                    return (`The name of the person is ${person.first_name} ${person.last_name}`)
                },

                //object within object

                phone_number: {
                    mobile: '12345',
                    landline: '6789'
                }
            }
            console.log(person.getFunction());
            console.log(person.phone_number.landline);



// Example: Using an Object Constructor.
// Using a constructor


                class persons {
                    constructor(first_name, last_name) {
                        this.firstname = first_name;
                        this.lastname = last_name;
                    }
                }
                // Creating new instances of person object


                let person1 = new persons('sudais', 'neelambra');
                let person2 = new persons('ashik', 'kuruniyan');

                console.log(person1.firstname);
                console.log(`${person2.firstname} ${person2.lastname}`);



// constructor

// In object-oriented programming (OOP), a constructor is a special method or function that is automatically called when an object is created from a class. The primary purpose of a constructor is to initialize the object's properties or set up the object's state. Constructors play a crucial role in the process of object instantiation. Here are some key uses and characteristics of constructors in OOP:



// The JavaScript Object.create() Method



// Object.create() example a
// simple object with some properties


                    const coder = {
                        isStudying: false,
                        printIntroduction: function () {
                            console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}.`)
                        }
                    }
                    
                    // Object.create() method

                    const me = Object.create(coder);

                    // "name" is a property set on "me", but not on "coder"

                    me.name = 'Mukul';

                    // Inherited properties can be overwritten

                    me.isStudying = true;

                    me.printIntroduction();




// Defining class using es6


                    class Vehicle {
                        constructor(name, maker, engine) {
                            this.name = name;
                            this.maker = maker;
                            this.engine = engine;
                        }
                        getDetails() {
                            return (`The name of the bike is ${this.name}.`)
                        }
                    }

                    // Making object with the help of the constructor

                    let bike1 = new Vehicle('icroos', 'toyota', '4540cc');
                    let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

                    console.log(bike1.name); // Hayabusa
                    console.log(bike2.maker); // Kawasaki
                    console.log(bike1.getDetails()); //The name of the bike is icroos



// Example: Traditional Way of defining an Object and simulating them as classes.



// Defining class in a Traditional Way.

                class Vehicls{
                    constructor(name, maker, engine) {
                        this.name = name,
                            this.maker = maker,
                            this.engine = engine;
                    }
                    getDetails() {
                        console.log('The name of the bike is ' + this.name);
                    }
                };


                let bikes1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
                let bikes2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

                console.log(bikes1.name);
                console.log(bikes2.maker);
                console.log(bikes1.getDetails());


// Encapsulation example


            class pers {
                constructor(name, id) {
                    this.name = name;
                    this.id = id;
                }
                add_Address(add) {
                    this.add = add;
                }
                getDetails() {
                    console.log(`Name is ${this.name},Address is: ${this.add}`);
                }
            }

            let pers1 = new pers('Mukul', 21);
            pers1.add_Address('Delhi')
            pers1.getDetails();


// Abstraction example


                    class dtls {
                    constructor(fname, lname) {
                        let firstname = fname;
                        let lastname = lname;

                    let getDetails_noaccess = function () {
                        return (`First name is: ${firstname} Last name is: ${lastname}`);
                    };

                    this.getDetails_access = function () {
                        return (`First name is: ${firstname}, Last name is: ${lastname}`);
                    };
                }
            }
                    let man = new dtls('Mukul', 'Latiyan');
                    console.log(man.firstname);
                    console.log(man.getDetails_noaccess);
                    console.log(man.getDetails_access());


// Example: Let’s understand inheritance and polymorphism with an example.


// Inheritance example
            class king {
                constructor(name) {
                    this.name = name;
                }
                // method to return the string
                man() {
                    return (`Name of person: ${this.name}`);
                }
            }
            class student extends king {
                constructor(name, id) {
                    // super keyword for calling the above 
                    // class constructor

                    super(name);
                    this.id = id;
                }

                lion() {
                    return (`${super.man()},Student ID: ${this.id}`);
                }
            }
            let student1 = new student('Mukul', 22);
            console.log(student1.lion());


// Polymorphism: Polymorphism is one of the core concepts of object-oriented programming languages. Polymorphism means the same function with different signatures is called many times. In real life, for example, a boy at the same time may be a student, a class monitor, etc. So a boy can perform different operations at the same time. Polymorphism can be achieved by method overriding and method overloading




// INHERITANCE    




// Certainly! Inheritance is a fundamental concept in object-oriented programming that allows a class (subclass or derived class) to inherit properties and methods from another class (superclass or base class). This promotes code reuse and supports the creation of a hierarchy of classes.



                    // Base class
                    class Person {
                        constructor(firstName, lastName) {
                            this.firstName = firstName;
                            this.lastName = lastName;
                        }

                        getFullName() {
                            return `${this.firstName} ${this.lastName} `;
                        }
                    }

                    // Subclass inheriting from Person
                    class Student extends Person {
                        constructor(firstName, lastName, studentId) {
                            // Call the constructor of the superclass (Person)
                            super(firstName, lastName);

                            // Additional property for Student
                            this.studentId = studentId;
                        }

                        // Override the getFullName method

                        getFullName() {
                            return `${this.firstName} ${this.lastName} (Student ID: ${this.studentId})`;
                        }

                        // New method specific to Student
                        
                        study() {
                            console.log(`${this.getFullName()} is studying.`);
                        }
                    }

                    // Create an instance of the subclass
                    let students = new Student('John', 'Doe', '12345');

                    // Access methods from the superclass
                    console.log(students.getFullName()); // Outputs: John Doe (Student ID: 12345)

                    // Access methods from the subclass
                    students.study(); // Outputs: John Doe (Student ID: 12345) is studying.





// ABSTRACTION


// Abstraction is a concept in object-oriented programming that involves hiding the complex implementation details and exposing only the relevant functionalities to the outside world. It allows you to focus on what an object does rather than how it achieves its functionality.


// Abstract class representing a vehicle
                    class Veh {
                        constructor(make, model) {
                            this.make = make;
                            this.model = model;
                        }

                        // Abstract method for starting the vehicle
                        start() {
                            throw new Error("Abstract method 'start' must be implemented");
                        }
                    }

                        // Concrete class representing a car
                        class Car extends Veh {
                            constructor(make, model, numDoors) {
                                super(make, model);
                                this.numDoors = numDoors;
                            }

                            // Implementation of the abstract method
                            start() {
                                return `Starting the ${this.make} ${this.model} car with ${this.numDoors} doors.`;
                            }
                        }

                        // Concrete class representing a motorcycle
                        class Motorcycle extends Veh {
                            constructor(make, model) {
                                super(make, model);
                            }

                            // Implementation of the abstract method
                            start() {
                                return `Starting the ${this.make} ${this.model} motorcycle.`;
                            }
                        }

                        // Usage of the classes
                        let myCar = new Car('Toyota', 'Camry', 4);
                        let myMotorcycle = new Motorcycle('Harley-Davidson', 'Sportster');

                        console.log(myCar.start());          // Outputs: Starting the Toyota Camry car with 4 doors.
                        console.log(myMotorcycle.start());    // Outputs: Starting the Harley-Davidson Sportster motorcycle.


                    

// ENCAPSULATION



//Encapsulation is one of the four fundamental Object-Oriented Programming (OOP) concepts and refers to the bundling of data and methods that operate on the data into a single unit known as a class. It involves restricting direct access to some of an object's components and can prevent unintended interference and misuse of data. Here's an example in JavaScript:


// Encapsulation example in JavaScript

                class mans {
                    constructor(name, age) {
                        // Public properties
                        this.name = name;

                        // Private property
                        let _age = age;

                        // Public method to get the age
                        this.getAge = function () {
                            return _age;
                        };

                        // Public method to update the age
                        this.setAge = function (newAge) {
                            if (newAge > 0) {
                                _age = newAge;
                                console.log(`${this.name}'s age has been updated to ${_age}.`);
                            } else {
                                console.log("Invalid age.");
                            }
                        };
                    }
                }

                // Usage of the Person class
                let sin = new mans("Alice", 25);

                // Accessing public properties
                console.log(`${sin.name} is ${sin.getAge()} years old.`);

                // Trying to access private property directly (will be undefined)
                console.log(sin._age); // Outputs: undefined

                // Using public method to update the age
                sin.setAge(30); // Outputs: Alice's age has been updated to 30.

                // Trying to set an invalid age
                sin.setAge(-5); // Outputs: Invalid age.





// POLYMORPHISM

                
// Polymorphism is a concept in object-oriented programming that allows objects of different types to be treated as objects of a common type. There are two types of polymorphism: compile-time (or static) polymorphism and runtime (or dynamic) polymorphism.


// Compile-time (Static) Polymorphism example

                        class Calculator {
                            // Method overloading for addition
                            add(a, b) {
                                return a + b;
                            }

                            // Method overloading for addition with three parameters
                            add(a, b, c) {
                                return a + b + c;
                            }
                        }

                        // Usage of the Calculator class
                        let calculator = new Calculator();

                        console.log(calculator.add(2, 3));        // Outputs: 5
                        console.log(calculator.add(2, 3, 4));     // Outputs: 9




                        // Runtime (Dynamic) Polymorphism example

                            class Animal {
                                speak() {
                                    console.log("Animal speaks");
                                }
                            }

                            class Dog extends Animal {
                                // Method overriding
                                speak() {
                                    console.log("Dog barks");
                                }
                            }

                            class Cat extends Animal {
                                // Method overriding
                                speak() {
                                    console.log("Cat meows");
                                }
                            }

                            // Usage of the classes
                            let dog = new Dog();
                            let cat = new Cat();

                            dog.speak(); // Outputs: Dog barks
                            cat.speak(); // Outputs: Cat meows
