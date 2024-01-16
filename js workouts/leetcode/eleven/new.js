

// var singleNumber = function(nums) {

//     console.log(nums);
//     console.log(nums.length);

//     for(i=0;i<nums.length;i++)
//     {
//         for(j=i+1;j<nums.length;j++)
//         {
//             if(nums[i]===nums[j])
//             {
//                 nums[j]=0
//                 nums[i]=0
//             }
          
//         }
//     }
//     // return nums

//     console.log(nums);

//     sun =0
//     result=0;

//     for(m=0;m<nums.length;m++)
//     {
//         if(nums[m]!=0)
//         {
//             sun=sun+1
//             result=nums[m]

//             console.log(sun);
//             console.log(result);
            
//         }
//     }

//     if(sun==1)
//     {
//       return  result
//     }


// };

// console.log(singleNumber([1,0,1]));

var singleNumber = function(nums) {
    console.log(nums);
    console.log(nums.length);

    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                nums[j] = null;
                nums[i] =null;
                console.log(nums[i]);
                console.log(nums[j]);
            }
        }
    }

    console.log(nums);

    // sun = 0;
    // result = 0;

    for (m = 0; m < nums.length; m++) {
        if (nums[m] !== null) {
            // sun = sun + 1;
            // result = nums[m];

            // console.log(sun);
            // console.log(result);

            return nums[m]
        }
    }

    // if (sun === 1) {
    //     return result;
    // }
};

console.log(singleNumber([1, 0, 1,8,9,8,9]));