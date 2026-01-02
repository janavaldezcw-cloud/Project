
// my soultion 
var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 1; i++) {   
        if (nums[i + 1] === nums[i]) {
            return true  
        }
    }
    return false   
};

//Faster soultion 

var containsDuplicate = function(nums) {
    const seen = new Set()
    for (let num of nums) {
        if (seen.has(num)) return true
        seen.add(num)
    }
    return false
};