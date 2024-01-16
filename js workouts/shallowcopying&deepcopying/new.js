// in the case of array


// without shallow copiying


            let one=[1,2,3,4,5,6,7,8]
            let two=one
            console.log(one);
            console.log(two);

            console.log(one===two);
            console.log(one==two);

            one[3]=10
            console.log(one);  //both are changed
            console.log(two);  //both are changed


// shallow copying



            let five=[1,2,3,4,5,6,7,8]
            let six=[...five]

            console.log("five "+five);
            console.log(`six ${six}`);

            console.log(five==six);   //false becouse using shallow copying u created new array
            console.log(five===six);

            five[3]=90
            six[1]=20

            console.log("five "+five);
            console.log(`six ${six}`);


// in the case of object


// without shallow copiying


            let ten={
                name:"sudais",
                age:20
            }
            let kin=ten
            console.log(ten);
            console.log(kin);

            console.log(ten===kin);
            console.log(ten==kin);

            ten.age=10
            console.log(ten);  //both are changed
            console.log(kin);  //both are changed


// shallow copying



            let son={
                name:"sudais",
                age:20
            }
            let sin={...son}

            console.log(son);
            console.log(sin);

            console.log(son==sin);   //false becouse using shallow copying u created new object
            console.log(son===sin);

            son.age=90
            sin.age=30

            console.log(son);
            console.log(sin);

// incase of nested object



            let man={
                name:"sudais",
                age:90,
                address:{
                    place:"korava",
                    district:"malappuram"
                }
            }
                

            let girl=man

            console.log(man);
            console.log(girl);    

            man.address.district="palakkad"  //both are changed
            console.log(man);
            console.log(girl)
                
// shallow copying in nested object 



            let boy={
                name:"sudais",
                age:90,
                address:{
                    place:"korava",
                    district:"malappuram"
                }
            }
                

            let women={...boy}

            console.log(boy);
            console.log(women);    

            boy.address.district="palakkad"  //both are changed  incase of nested object ,the nested objects changes in the shallow copying
            console.log(boy);
            console.log(women)


// deepcopying


            let kunj={
                name:"vaishnavi",
                age:31,
                mark:31,
                address:{
                    place:"manjappety",
                    district:"malappuram"
                }
            }

            let vaish=JSON.parse(JSON.stringify(kunj))

            console.log(vaish);
            console.log(kunj);

            kunj.name="kunjus"
            console.log(kunj);
            console.log(vaish);

            kunj.address.place="kuthiravttam"

            console.log(kunj);
            console.log(vaish);
                
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   