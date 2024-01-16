




var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++)
    {
        for(let j=i+1;j<nums.length;j++)
            {
                if(nums[i]+nums[j]===target)
                {
                    console.log("Pair : ", nums[i], nums[j]);
                }            
            }
    }
    
};

var nums=[1,3,5,2,6];
var target=3;
twoSum(nums,target);




