var getConcatenation = function(nums) {
    

    let length=nums.length

    for(i=0;i<length;i++)
    {
        nums[length+i]=nums[i]
    }
    return nums
};


console.log(getConcatenation([1,2,3]));