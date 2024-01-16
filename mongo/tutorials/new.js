

//creatiion of new collection

                        // "show dbs"           //to see the databases
                        // "show collections"        // to see the collections

                        // "use(collection name)"        //to create or switch to collections

        
    // db.(collectionname).insertOne({...(wanted document write)...})     //eg:-db.user.insertOne({name:"sudais",age:21})  //add one documnets at a tym
    // db.(collectionname).insertMany({...(wanted document write)...})     //eg:-db.user.insertMany([{name:"sudais",age:21},{name:"shaheer",age:23}])    //add one more documnets at a tym

    // db.(collectionname).find()     eg:db.user.find()   //to find the all documents


    // db.(collectionname).drop()    eg:db.user.drop()   //to delete the collection

    // db.(collectionname).findOne()     eg:db.user.findOne()   //to find the first documents

    // db.(collectionname).findOne({(filter you wanted value)})     eg:db.user.findOne({name:"sudais"})   //to find the filtered documents

    // db.(collectionname).find({(filter you wanted value)},{(removing things)})     eg:db.user.find({name:"sudais"}{_id:false,gender:0})   //in this case id um gender um illathe i mean avoid cheythulla result tharum



//  Update the collection 



            // db.(collectionname).updateOne({(filter you wanted },{$set:{(updatingvalues)}})     eg:db.user.updateOne({name:"sudais"}{$set:{age:34,gender:male}})    //age and gender update aavum


// to update multiple document

            // db.(collectionname).update({(filter you wanted },{$set:{(updatingvalues)}},{multy:true})     eg:db.user.updateOne({name:"sudais"}{$set:{age:34,gender:male}})    //sudais nn name ulla ellathileyum age and gender update aavum


// delete from the collections


            // db.(collection name).deleteOne({filter you want})       eg:-db.user.deleteOne({name:"sudais"})    //filter l first satisfied aaavunna document delete akkum 
            // db.(collection name).deleteOne({empty})       eg:-db.user.deleteOne({})    //collection nile first  document delete akkum 

            // db.(collection name).deleteMany({filter you want})       eg:-db.user.deleteMany({name:"sudais"})    //filter l  satisfied aaavunna ella document delete akkum 
            // db.(collection name).deleteMany({empty})       eg:-db.user.deleteMany({})    //collection nile ella  document delete akkum 


// ($unset)  //field  ne pokkan vendi



        // db.(collection name).updateMany({filter you want},{$unset:{kalayanda field:""}})       eg:-db.user.updateMany({name:"sudais"},{$unset:{age:""}})    //age field povum


// ($lookup)   //aggragate function l rand collections thammilulla relation

// db.user.aggregate({$lookup:{from:(eathil ninnano),localField:(localile mattethulayi related aaya field),foreignField:(matttethin ivdtheyumayi related aayath),as:(new name)}})   // db.user.aggregate({$lookup:{from:"order",localField:"ordernum",foreignField:"ordersummery",as:"orderdetails"}}) 


            // oneof> db.products.find()
            // [
            //   { _id: 123, pro: 'shirt', color: 'green', price: 999 },
            //   { _id: 234, pro: 'pant', color: 'black', price: 999 },
            //   { _id: 341, pro: 'shorts', color: 'ren', price: 200 },
            //   { _id: 230, pro: 'bra', color: 'pink', price: 100 },
            //   { _id: 124, pro: 'shaddi', color: 'meroon', price: 5000 }
            // ]
            // oneof> db.order.aggregate({$lookup:{from:"products",localField:"pId",foreignField:"_id",as:"productsfulldetails"}})
            // [
            //   {
            //     _id: 1,
            //     date: ISODate('2001-02-10T18:30:00.000Z'),
            //     pId: [ 123, 124 ],
            //     productsfulldetails: [
            //       { _id: 123, pro: 'shirt', color: 'green', price: 999 },
            //       { _id: 124, pro: 'shaddi', color: 'meroon', price: 5000 }
            //     ]
            //   },
            //   {
            //     _id: 2,
            //     date: ISODate('2001-03-11T18:30:00.000Z'),
            //     pId: [ 234, 123 ],
            //     productsfulldetails: [
            //       { _id: 234, pro: 'pant', color: 'black', price: 999 },
            //       { _id: 123, pro: 'shirt', color: 'green', price: 999 }
            //     ]
            //   },
            //   {
            //     _id: 3,
            //     date: ISODate('2001-03-11T18:30:00.000Z'),
            //     pId: [ 341, 230 ],
            //     productsfulldetails: [
            //       { _id: 230, pro: 'bra', color: 'pink', price: 100 },
            //       { _id: 341, pro: 'shorts', color: 'ren', price: 200 }
            //     ]
            //   }
            // ]




// schema validation

                    // db.creatCollection("costomer",{
                    //     validator:{
                    //         $jsonSchema:{
                    //             bsonType:"object",
                    //             required:["name","email","address"]
                    //             properties:{
                    //                 name:{
                    //                     bsonType:"string",
                    //                     description:"name is dequired"
                    //                 },
                    //                 email:{
                    //                     bsonType:"string",
                    //                     description:"email is dequired"
                    //                 },
                    //                 address:{
                    //                     bsonType:"object",
                    //                     description:"address required"
                    //                     properties:{
                    //                         street:{
                    //                             bsonType:"String"
                    //                         },
                    //                         city:{
                    //                             bsonType:"String"
                    //                         },
                    //                         country:{
                    //                             bsonType:"String"
                    //                         }
                    //                     }
                    //                 }
                    //             }
                    //         }
                    //     }
                    // })


// setting validation level and action

         // db.creatCollection("costomer",{
                    //     validator:{
                    //         $jsonSchema:{
                    //             bsonType:"object",
                    //             required:["name","email","address"]
                    //             properties:{
                    //                 name:{
                    //                     bsonType:"string",
                    //                     description:"name is dequired"
                    //                 },
                    //                 email:{
                    //                     bsonType:"string",
                    //                     description:"email is dequired"
                    //                 },
                    //                 address:{
                    //                     bsonType:"object",
                    //                     description:"address required"
                    //                     properties:{
                    //                         street:{
                    //                             bsonType:"String"
                    //                         },
                    //                         city:{
                    //                             bsonType:"String"
                    //                         },
                    //                         country:{
                    //                             bsonType:"String"
                    //                         }
                    //                     }
                    //                 }
                    //             }
                    //         }
                    //     },
                    //      validationLevel:"moderate/strict"   //by default its strict
                    //      validationAction:"error/warn"       //by default its error
                    // })


//$gt  (greater than)


                // db.(collection name).find({requirement:{$gt:(condition)}})   //eg:- db.costomer.find({age:{$gt:20}})

// $lt  (lessthan)


                // db.(collection name).find({requirement:{$lt:(condition)}})   //eg:- db.costomer.find({age:{$lt:20}})           


// $and (for compaining to conditions)

                // db.costomer.find({$and:[{requirement:{$gt:(condition)}},{requirement:{$lt:(condition)}}]}) //eg:- db.costomer.find({$and:[{age:{$gt:20}},{age:{$lt:35}}]})



// $or (for compaining to conditions)

                // db.costomer.find({$or:[{requirement:{$gt:(condition)}},{requirement:{$lt:(condition)}}]}) //eg:- db.costomer.find({$or:[{age:{$gt:20}},{age:{$lt:35}}]})


// $in  (for finding) 

                // db.costomer.find({"requirement":{$in:["requirement","requirement"]}}) //eg:  db.costomer.find({"address.city":{$in:["kerala","calicut"]}})           

//$sort  (for sorting)

                // db.costomer.find().sort({name:1})   //eg:- db.costomer.find().sort({name:1})----names in alphabetic order     another eg:-db.costomer.find().sort({name:-1})


// $skip (for skipping)

                // db.costomer.find({}).skip(1)
//$limit (for a limit) 

                // db.costomer.find({}).limit(1)


// $inc (increesing)

                // db.costomer.updateOne({name:"sudais"},{$inc:{age:1}})   it icrease the value of age by one
                

                






// AGGREGATION METHODS





// $group and $sum ,$multyply

                // input

                // db.products.find()
                // [
                //   { _id: 1, pdId: 123, name: 'shoe', price: 900, quantity: 4 },
                //   { _id: 2, pdId: 125, name: 'shirt', price: 600, quantity: 2 },
                //   { _id: 3, pdId: 124, name: 'pant', price: 500, quantity: 3 }
                // ]


// method using the group and sum and multyply    // products> db.products.aggregate([{$group:{_id:"$name",total:{$sum:{$multiply:["$quantity","$price"]}}}}])

                // output
                // [
                //   { _id: 'shoe', total: 3600 },
                //   { _id: 'pant', total: 1500 },
                //   { _id: 'shirt', total: 1200 }
                // ]

// $match method

                // input

                //       [
                //         { _id: 1, name: 'sudais', scores: { english: 24 } },
                //         { _id: 2, name: 'hijaz', scores: { english: 34 } },
                //         { _id: 3, name: 'shaheer', scores: { english: 84 } },
                //         { _id: 4, name: 'shefin', scores: { english: 20 } }
                //       ]


        // method       

                // db.pds.aggregate({$match:{"scores.english":{$gte:30}}})

        // output

        // [
        //         { _id: 2, name: 'hijaz', scores: { english: 34 } },
        //         { _id: 3, name: 'shaheer', scores: { english: 84 } }
        // ]