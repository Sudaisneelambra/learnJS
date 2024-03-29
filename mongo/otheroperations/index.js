// 1- $add

                        //----------------------------- input------------------------------

                        // { "_id": 1, "value1": 5, "value2": 10 }
                        // { "_id": 2, "value1": 15, "value2": 20 }
                        // { "_id": 3, "value1": 25, "value2": 30 }
                        

                        // -----------------------------method----------------------------------

                        // db.numbers.aggregate([
                        //     {
                        //       $project: {
                        //         _id: 1,
                        //         sum: { $add: ["$value1", "$value2"] }
                        //       }
                        //     }
                        //   ])
                          
                        // ------------------------------output---------------------------

                        // { "_id": 1, "sum": 15 }
                        // { "_id": 2, "sum": 35 }
                        // { "_id": 3, "sum": 55 }
                        

// --------------------------------------------------------------------------------------------------------------------------------------


// 2- $substract

                        //----------------------------- input------------------------------

                        // { "_id": 1, "value1": 10, "value2": 5 }

                        

                        // -----------------------------method----------------------------------

                        // db.numbers.aggregate([
                        //     {
                        //       $project: {
                        //         result: { $subtract: ["$value1", "$value2"] }
                        //       }
                        //     }
                        //   ])
                          
                          
                        // ------------------------------output---------------------------

                        // { "_id": 1, "result": 5 }

                        

// --------------------------------------------------------------------------------------------------------------------------------------

// 3- $multiply

                        //----------------------------- input------------------------------

                        // { "_id": 1, "name": "Product A", "price": 10 }
                        // { "_id": 2, "name": "Product B", "price": 20 }
                        // { "_id": 3, "name": "Product C", "price": 15 }
                        

                        

                        // -----------------------------method----------------------------------

                        // db.products.aggregate([
                        //     {
                        //       $project: {
                        //         _id: 1,
                        //         name: 1,
                        //         totalCost: { $multiply: ["$price", 5] }
                        //       }
                        //     }
                        //   ])
                          
                          
                        // ------------------------------output---------------------------

                        // { "_id": 1, "name": "Product A", "totalCost": 50 }
                        // { "_id": 2, "name": "Product B", "totalCost": 100 }
                        // { "_id": 3, "name": "Product C", "totalCost": 75 }
                        

                        

// --------------------------------------------------------------------------------------------------------------------------------------

// 4- $sum

                        //----------------------------- input------------------------------

                        // {
                        //     "_id": 1,
                        //     "product": "A",
                        //     "quantity": 10,
                        //     "price": 5
                        //   }
                        //   {
                        //     "_id": 2,
                        //     "product": "B",
                        //     "quantity": 5,
                        //     "price": 8
                        //   }
                        //   {
                        //     "_id": 3,
                        //     "product": "A",
                        //     "quantity": 8,
                        //     "price": 6
                        //   }
                          
                        

                        

                        // -----------------------------method----------------------------------

                        // db.sales.aggregate([
                        //     {
                        //       $group: {
                        //         _id: "$product",
                        //         totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } }
                        //       }
                        //     }
                        //   ])
                          
                          
                          
                        // ------------------------------output---------------------------

                        // { "_id" : "A", "totalRevenue" : 110 }
                        // { "_id" : "B", "totalRevenue" : 40 }

                        

                        

// --------------------------------------------------------------------------------------------------------------------------------------

// 5- $addtoset

                        //----------------------------- input------------------------------

                        // { 
                        //     "_id" : 1, 
                        //     "name" : "John", 
                        //     "hobbies" : ["reading", "hiking"]
                        //   }
                          

                        // -----------------------------method----------------------------------

                        // db.users.update(
                        // { _id: 1 },
                        // { $addToSet: { hobbies: "gardening" } }
                        // )

                          
                          
                          
                        // ------------------------------output---------------------------

                        // { 
                        //     "_id" : 1, 
                        //     "name" : "John", 
                        //     "hobbies" : ["reading", "hiking", "gardening"]
                        //   }
                          

                        

                        

// --------------------------------------------------------------------------------------------------------------------------------------

// 6- $push

                        //----------------------------- input------------------------------

                        // {
                        //     "_id": 1,
                        //     "username": "john_doe",
                        //     "favorites": ["apple", "banana", "cherry"]
                        //   }
                          
                          

                        // -----------------------------method----------------------------------

                        // db.users.update(
                        //     { "_id": 1 },
                        //     { "$push": { "favorites": "grape" } }
                        //   );
                          

                          
                          
                          
                        // ------------------------------output---------------------------

                        // {
                        //     "_id": 1,
                        //     "username": "john_doe",
                        //     "favorites": ["apple", "banana", "cherry", "grape"]
                        //   }
                          

                        

                        

// --------------------------------------------------------------------------------------------------------------------------------------

// 7- $pop

                        //----------------------------- input------------------------------

                        // { "_id": 1, "myArray": [1, 2, 3, 4, 5] }

                          
                          

                        // -----------------------------method----------------------------------

                        // db.exampleCollection.update(
                        //     { "_id": 1 },
                        //     { "$pop": { "myArray": 1 } }
                        //   )
                          

                          
                        // ------------------------------output---------------------------

                        // { "_id": 1, "myArray": [1, 2, 3, 4] }

                          

                        

                        

// --------------------------------------------------------------------------------------------------------------------------------------

// 8- $pull


// In MongoDB, the $pull operator is used to remove all instances of a specified value or values from an array

                        //----------------------------- input------------------------------

                        // {
                        //     "_id": 1,
                        //     "name": "John Doe",
                        //     "hobbies": ["reading", "coding", "swimming"]
                        //   }
    

                        // -----------------------------method----------------------------------

                        // db.users.update(
                        //     { "_id": 1 },
                        //     { $pull: { "hobbies": "coding" } }
                        //   )                          
                          

                          
                        // ------------------------------output---------------------------

                        // {
                        //     "_id": 1,
                        //     "name": "John Doe",
                        //     "hobbies": ["reading", "swimming"]
                        //   }
                          

                          

                        

                        

// --------------------------------------------------------------------------------------------------------------------------------------
// 9- $unset

                        //----------------------------- input------------------------------

                        // { 
                        //     "_id": 1,
                        //     "name": "John",
                        //     "age": 30,
                        //     "email": "john@example.com"
                        //   }
                          
    

                        // -----------------------------method----------------------------------

                        // db.users.update(
                        //     { "_id": 1 },
                        //     { $unset: { "email": "" } }
                        //   )
                          
                        // ------------------------------output---------------------------

                        // { 
                        //     "_id": 1,
                        //     "name": "John",
                        //     "age": 30
                        //   }
              
// --------------------------------------------------------------------------------------------------------------------------------------

// 10- $inc

                        //----------------------------- input------------------------------

                        // {
                        //     "_id": 1,
                        //     "username": "john_doe",
                        //     "likes": 100
                        //   }
                          
                          
    

                        // -----------------------------method----------------------------------

                        // db.users.update(
                        //     { "username": "john_doe" },
                        //     { $inc: { "likes": 20 } }
                        //   );
                          
                          
                        // ------------------------------output---------------------------

                        // {
                        //     "_id": 1,
                        //     "username": "john_doe",
                        //     "likes": 120
                        //   }
                          
              
// --------------------------------------------------------------------------------------------------------------------------------------