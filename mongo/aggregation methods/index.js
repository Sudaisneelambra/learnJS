// 1- $match

                        //----------------------------- input------------------------------

                        // { "_id": 1, "product": "A", "quantity": 3, "date": ISODate("2023-01-01") }
                        // { "_id": 2, "product": "B", "quantity": 7, "date": ISODate("2023-01-02") }
                        // { "_id": 3, "product": "A", "quantity": 6, "date": ISODate("2023-01-03") }
                        // { "_id": 4, "product": "C", "quantity": 4, "date": ISODate("2023-01-04") }

                        // -----------------------------method----------------------------------

                        // db.sales.aggregate([
                        //     { $match: { quantity: { $gt: 5 } } }
                        //   ])
                        
                        // ------------------------------output---------------------------

                        // { "_id": 2, "product": "B", "quantity": 7, "date": ISODate("2023-01-02") }
                        // { "_id": 3, "product": "A", "quantity": 6, "date": ISODate("2023-01-03") }

// --------------------------------------------------------------------------------------------------------------------------------------

// 2- $group

                        //----------------------------- input------------------------------

                        // [
                        //     { "_id": 1, "product": "A", "quantity": 10, "price": 5 },
                        //     { "_id": 2, "product": "B", "quantity": 5, "price": 10 },
                        //     { "_id": 3, "product": "A", "quantity": 15, "price": 8 },
                        //     { "_id": 4, "product": "B", "quantity": 8, "price": 12 }
                        //   ]
                        
                        // -----------------------------method----------------------------------

                        // db.sales.aggregate([
                        //     {
                        //       $group: {
                        //         _id: "$product",
                        //         totalQuantity: { $sum: "$quantity" }
                        //       }
                        //     }
                        //   ])

                        // ------------------------------output---------------------------
                        

                        // [
                        //     { "_id": "A", "totalQuantity": 25 },
                        //     { "_id": "B", "totalQuantity": 13 }
                        //   ]
  

// --------------------------------------------------------------------------------------------------------------------------------------


// 3-$lookup

                        //----------------------------- input------------------------------

                        // --------------------------ordercollection-----------------
                        // [
                        //     { "_id": 1, "order_number": "ORD001", "product_id": 101 },
                        //     { "_id": 2, "order_number": "ORD002", "product_id": 102 },
                        //     { "_id": 3, "order_number": "ORD003", "product_id": 101 }
                        //   ]


                        // ---------------------------------product collection---------------------

                        // [
                        //     { "_id": 101, "product_name": "Laptop", "price": 1200 },
                        //     { "_id": 102, "product_name": "Smartphone", "price": 800 }
                        //   ]

                        // -----------------------------method----------------------------------


                        // db.orders.aggregate([
                        //     {
                        //       $lookup: {
                        //         from: "products",
                        //         localField: "product_id",
                        //         foreignField: "_id",
                        //         as: "orderDetails"
                        //       }
                        //     }
                        //   ])
                        
                        // ------------------------------output---------------------------
                        
                        // [
                        //     {
                        //       "_id": 1,
                        //       "order_number": "ORD001",
                        //       "product_id": 101,
                        //       "orderDetails": [
                        //         { "_id": 101, "product_name": "Laptop", "price": 1200 }
                        //       ]
                        //     },
                        //     {
                        //       "_id": 2,
                        //       "order_number": "ORD002",
                        //       "product_id": 102,
                        //       "orderDetails": [
                        //         { "_id": 102, "product_name": "Smartphone", "price": 800 }
                        //       ]
                        //     },
                        //     {
                        //       "_id": 3,
                        //       "order_number": "ORD003",
                        //       "product_id": 101,
                        //       "orderDetails": [
                        //         { "_id": 101, "product_name": "Laptop", "price": 1200 }
                        //       ]
                        //     }
                        //   ]
                        
// --------------------------------------------------------------------------------------------------------------------------------------


// 4-$unwind

                        //----------------------------- input------------------------------

                        // {
                        //     "_id": 1,
                        //     "orderNumber": "12345",
                        //     "items": [
                        //       {"product": "Laptop", "quantity": 2},
                        //       {"product": "Mouse", "quantity": 1},
                        //       {"product": "Keyboard", "quantity": 1}
                        //     ]
                        //   }
                          
                          

                        // -----------------------------method----------------------------------

                        // db.orders.aggregate([
                        //     { $unwind: "$items" }
                        //   ])
                          
                          
                          
                        
                        // ------------------------------output---------------------------
                        
                        // { "_id": 1, "orderNumber": "12345", "items": { "product": "Laptop", "quantity": 2 } }
                        // { "_id": 1, "orderNumber": "12345", "items": { "product": "Mouse", "quantity": 1 } }
                        // { "_id": 1, "orderNumber": "12345", "items": { "product": "Keyboard", "quantity": 1 } }
                        

// --------------------------------------------------------------------------------------------------------------------------------------

                        
// 5-$project

                        //----------------------------- input------------------------------

                        // {
                        //     "_id": 1,
                        //     "name": "Alice",
                        //     "age": 25,
                        //     "grades": {
                        //       "math": 90,
                        //       "history": 85,
                        //       "science": 92
                        //     }
                        //   }
                          
                          
                          

                        // -----------------------------method----------------------------------

                        // db.students.aggregate([
                        //     {
                        //       $project: {
                        //         _id: 0,          // Exclude the _id field
                        //         name: 1,         // Include the name field
                        //         "grades.math": 1 // Include the grades.math field
                        //       }
                        //     }
                        //   ])
                          
                          
                        
                        // ------------------------------output---------------------------
                        
                        // {
                        //     "name": "Alice",
                        //     "grades": {
                        //       "math": 90
                        //     }
                        //   }
                          

// --------------------------------------------------------------------------------------------------------------------------------------

                          
// 6-$out


// specifies that the results of the aggregation should be stored in a new collection named "monthly_sales".
                        //----------------------------- input------------------------------

                        // { "_id": 1, "product": "A", "quantity": 10, "price": 5 }
                        // { "_id": 2, "product": "B", "quantity": 5, "price": 10 }
                        // { "_id": 3, "product": "A", "quantity": 8, "price": 8 }
                        
                          
                          
                          

                        // -----------------------------method----------------------------------

                        // db.orders.aggregate([
                        //     {
                        //         $group: {
                        //             _id: "$product",
                        //             totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } }
                        //         }
                        //     },
                        //     {
                        //         $out: "product_revenue"
                        //     }
                        // ])
                        
                          
                        // db.product_revenue.find()

                          
                        
                        // ------------------------------output---------------------------
                        
                        // { "_id": "B", "totalRevenue": 50 }
                        // { "_id": "A", "totalRevenue": 130 }

                          
// 7-$skip

                        //----------------------------- input------------------------------

                        // { "_id": 1, "name": "John", "age": 30 }
                        // { "_id": 2, "name": "Alice", "age": 25 }
                        // { "_id": 3, "name": "Bob", "age": 35 }
                        // { "_id": 4, "name": "Eve", "age": 30 }
                        
                          
                          

                        // -----------------------------method----------------------------------

                        // db.users.aggregate([
                        //     { $match: { age: { $gte: 30 } } }, // Match documents where age is greater than or equal to 30
                        //     { $skip: 1 } // Skip the first document in the result
                        // ])
                        
                          
                        
                        // ------------------------------output---------------------------
                        
                        // { "_id": 3, "name": "Bob", "age": 35 }
                        // { "_id": 4, "name": "Eve", "age": 30 }
                        
                          

// --------------------------------------------------------------------------------------------------------------------------------------


// 8-$limit

                        //----------------------------- input------------------------------

                        // { "_id": 1, "name": "Alice", "age": 30 }
                        // { "_id": 2, "name": "Bob", "age": 25 }
                        // { "_id": 3, "name": "Charlie", "age": 35 }
                        // { "_id": 4, "name": "David", "age": 28 }
                        // { "_id": 5, "name": "Eve", "age": 32 }
                        
                        
                          
                          

                        // -----------------------------method----------------------------------

                        // db.employees.aggregate([
                        //     { $limit: 3 }
                        //   ])
                          
                        
                          
                        
                        // ------------------------------output---------------------------
                        
                        // { "_id": 1, "name": "Alice", "age": 30 }
                        // { "_id": 2, "name": "Bob", "age": 25 }
                        // { "_id": 3, "name": "Charlie", "age": 35 }
                        
                          

// --------------------------------------------------------------------------------------------------------------------------------------


