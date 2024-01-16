// var moveZeroes = function(nums) {

//     let  man=[]
//     console.log("main array",nums);

//     for(i=0;i<nums.length;i++)
//     {

//         if(nums[i]==0)
//         {
//             man.push(nums[i])
//             nums[i]=null
            
//         }
    
//     }

//     console.log("zeros",man);

//     let sin=nums.length
//     console.log(sin);

//     var newArray = [];

//     for (var i = 0; i < nums.length; i++) {
//         if (nums[i] !== null) {
//             newArray.push(nums[i]);
//         }
//     }

//     console.log("newarray",newArray);
//     nums=[]
//     console.log(nums);


//     for(i=0;i<newArray.length;i++)
//     {
//         nums.push(newArray[i])
//     }
//     console.log(nums);

//     for(i=0;i<man.length;i++)
//     {
//         nums.push(man[i])
//     }
//     console.log(nums);

    





    // let looo=[]

    // for(i=0;i<nums.length;i++)
    // {
    //     if(nums[i]!=null)
    //     {
    //         looo.push(nums[i])
    //     }
    // }

    // console.log("numbers",looo);


    // for(i=0;i<man.length;i++)
    // {
    //     looo.push(man[i])
    // }



    // for(i=0;i<man.length;i++)
    // {
    //     let length=looo.length
    //     looo[length]=man[i]
    // }


    
//  return nums

// };


// console.log(moveZeroes([0,0,6,9,6]));

var moveZeroes = function(nums) {


    zro=0
console.log(nums.length);
console.log(nums);

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            console.log(i);
            nums[zro] = nums[i];
            zro++;
        }
    }
    console.log(zro);

    for (var j = zro; j < nums.length; j++) {
        
           nums[j]=0
        
    }

    

    return nums

};


console.log(moveZeroes([0,0,6,9,6]));