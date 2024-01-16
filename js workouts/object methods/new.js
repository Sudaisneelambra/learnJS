            const obj={
                name:"sudais",
                age:21,
                place:"koravakund",
                job:"software engineer",
                phone:9747491562
            }


// 1. object.keys

            let keys=Object.keys(obj)
            console.log(keys);



// 2. object.values


            let value=Object.values(obj)

            console.log(value);

// 3. object.entries


            let entry=Object.entries(obj)
            console.log(entry);

// 4. has own property

            console.log(obj.hasOwnProperty('name'));
            console.log(obj.hasOwnProperty('address'));
            console.log(obj.hasOwnProperty('phone'));


// adding and modifying property


// adding

            obj.address="neelambra"

            console.log(obj);


// modifying

            obj.age=24

            console.log(obj);

// Removing property

            console.log(obj.address)
            delete obj.address

            console.log(obj);

// 5. object method

            const sin={
                name:"sudais",
                age:21,
                calc:function(){
                    console.log(2023-this.age);
                }
            }

            sin.calc()


// object short hand

            const name = 'manjesh';
            const age = 25;

            const person = {
            name,
            age  
            };

            console.log(person.name); 
            console.log(person.age);

// 6. object.create property


            const user={
                greet:function(){
                    console.log(`hellow ${this.name} how do you do`);
                }
            }

            const man=Object.create(user)

            man.name="sudais"
            man.age=32

            console.log(man);

            man.greet()


// 7.  objec.freeze property

            let one={
                name:"sudais",
                age:23
            }

            Object.freeze(one)

            delete one.name  //not possible because its freezed

            console.log(one);

            one.name="kunnan" //not possible because its freezed

            console.log(one);

// incase of nested

            let nested={
                name:"fathima",
                age:11,
                address:{
                    house:"thrassery"
                }
            }

            Object.freeze(nested)

            delete nested.address.house  //possible

            console.log(nested);  


            nested.address.house="vallipparamban"  //possible

            console.log(nested);




            let minna={
                name:"minna",
                age:3,
                address:{
                    house:"singappenn"
                }
            }
            
            Object.freeze(minna)

            
            console.log(Object.isFrozen(minna));
            console.log(Object.isFrozen(minna.name));
            console.log(Object.isFrozen(minna.address));
            console.log(Object.isFrozen(minna.address.house));

           


            Object.keys(minna).forEach((e)=>{
                let pin=minna[e]
                console.log(minna[e]);
                if(typeof pin ==='object' && pin!==null && !Object.isFrozen(pin))
                {
                    Object.freeze(pin)
                }
            })

             delete minna.name
            delete minna.address.house
            minna.address.house="varattipparachetta"
            console.log(minna);

            console.log(Object.isFrozen(minna.address));


// 8 . objec.seal property

            let kun={
                name:"sudais",
                age:23
            }

            Object.seal(kun)

            delete kun.name  //not possible because its freezed

            console.log(kun);
            kun.place="manjadi"

            kun.name="kunnan" // possible

            console.log(kun);

// incase of nested

            let nest={
                name:"shifa",
                age:33,
                address:{
                    house:"edakkadamban"
                }
            }

            Object.seal(nest)

            delete nest.address.house

            console.log(nest);

            nest.address.house="thepp petti" //it is possible
            console.log(nest);


            let lina={
                name:"linu",
                age:3,
                address:{
                    house:"singappenn"
                }
            }

            Object.seal(lina)

            
            console.log(Object.isSealed(lina));
            console.log(Object.isSealed(lina.name));
            console.log(Object.isSealed(lina.address));
            console.log(Object.isSealed(lina.address.house));

           


            Object.keys(lina).forEach((e)=>{
                let sin=lina[e]
                console.log(lina[e]);
                if(typeof sin ==='object' && sin!==null && !Object.isSealed(sin))
                {
                    Object.seal(sin)
                }
            })

             delete lina.name
            delete lina.address.house
            lina.address.house="varattipparachetta"
            console.log(lina);

            console.log(Object.isSealed(lina.address));


// 9.  Object.assign

            const four={
                a:5,
                b:9
            }
            const two={
                b:14,
                c:17
            }

            let three=Object.assign(four,two)
            console.log(three);

            console.log(four); //modified first gived object


// if we dont want first gived object


            const seven={
                a:5,
                b:9
            }
            const eight={
                b:14,
                c:17
            }

            let five=Object.assign({},seven,eight)
            console.log(five);
            console.log(seven);


// 10. Object.preventExtensions(obj)


            const love={
                name:"sinan"
            }

            Object.preventExtensions(love)

            love.age=25 //can not add any property

            console.log(love);


//  11.Object.is()          it is used to compare two values equality


            let a=10
            let b="10"
            let s=10
            let w=10


            console.log(Object.is(s,w));

            console.log(Object.is(a,b));  //returns false 

            let z={ name:"sudais"}
            let x={ name:"sudais"}

            console.log(Object.is(z,x));

// 12. object.defineproperty


            const n={}

            Object.defineProperty(n,"name",{
                value:"vaishnavi",
                writable:true,     //writable is set to false, making the property read-only.
                enumerable:true,    //enumerable is set to true, allowing the property to show up in for...in loops and Object.keys().
                configurable:true    //configurable is set to false, preventing the property from being deleted or having its attributes modified.
            })

            console.log(n);
            n.name="sinan"   //when the writable is false..the value is only readonly you cant modify the value
            console.log(n);

            for(i in n)
            {
                console.log(i);  //when the enumerable is false,yu did'nt get the key values in for in loop 
            }

            delete n.name
            console.log(n);   //when the configurable is false ,you cant delete the value


//  13.Object.defineProperties


                     // ------------------------------------------kitteeettilla--------------------------------------------------------


// 14. object.fromEntries


            const l={
                a:20,
                b:19,
                c:22
            }

            let q=Object.entries(l) //converted to entreas
            console.log(q);

            let t=Object.fromEntries(q)  //converted back to normal from entries
            console.log(t);



 // 15 .Object.getOwnPropertyDescriptor
 
            const p={
                name:"shahala",
                age:77
            }

            let o=Object.getOwnPropertyDescriptor(p,'age')   //only get one propperty
            console.log(o);


