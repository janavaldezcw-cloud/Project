// My soultion 

var getConcatenation = function(nums) {
    let array = []
    for (let i = 0; i < nums.length; i++) {
         array.push(nums[i])
    }
        let ans = array.concat(nums)
    return ans
};


// Faster way Only one pass internally to creat the new array 

    var getConcatenation = function(nums) {
    return nums.concat(nums)
};


// max performace 

var getConcatenation = function(nums) {
  const n = nums.length
  const ans = new Array (2 * n)
    for (let i = 0; i < n; i++) {
        ans[i] = nums[i]
        ans[i + n ] = nums[i]
    
    }
    return ans 
};