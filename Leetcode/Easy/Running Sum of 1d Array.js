
var runningSum = function(nums) {
        let sums = new Array (nums.legnth)
        sums[0] = nums[0]
        for (let i = 1; i < nums.length;i++) {
           sums[i] = sums[i - 1] + nums [i]
        }
         return sums }



         var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1]
    }
    return nums
}