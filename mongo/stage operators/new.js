// $match operator

        // db.persons.aggreration([{$match:{age:{$gt:50}}}])


//group stage


        // db.persons.aggreration([{$group:{_id:"$name"}}]  

        // db.persons.aggreration([{$group:{_id:"$coutry.state"}}]    //incase of object
        
        // db.persons.aggreration([{$group:{_id:{age:"$age",gender:"$gender"}}}])  //in case of group by multiple fields

// match and group stages

        // db.person.aggregate([
            //stage one
        // {$match:{gender:"male"}},
            // stage 2
        // {$group:{_id:{age:"$age",gender:"$gender"}}}])

//$count

        // db.person.aggrerate([{$count:"allDocumentsCount"}])

        //  db.pds.aggregate([{$group:{_id:"$name"}},{$count:"name"}])

// $sort stage

        //  db.pds.aggregate([{$sort:{name:1}}])   //name will be alphabetic order
        //  db.pds.aggregate([{$sort:{"scores.english":-1}}])        //scores seems like dessending order
     
        
// group and sort


        //  db.pds.aggregate([{$group:{_id:"$name"}},{$sort:{name:-1}}])

// $project

