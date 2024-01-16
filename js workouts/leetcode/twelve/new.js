var majorityElement = function(nums) {
for(i=0;i<nums.length;i++)
{
    count=1
    console.log(nums);

    for(j=i+1;j<nums.length;j++)
    {
        if(nums[i]!=null)
        {
            if(nums[i]==nums[j])
            {
                count++
                nums.splice(j,1)
            }
        }
        
    }
    nums[i]=count
}    

return nums



    
};



console.log(majorityElement([1,1,3,1]));