// My soultion 
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0
        for (let i = 0;i < nums.length; i++) {
            while (val === nums[i]) {
                nums.splice(i , 1)
            }

        } return k = nums.length
          
    
};

/// Fastes Soultion 

var removeElement = function(nums, val) {
    let k = 0; // pointer for the next position to fill

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // overwrite the next available position
            k++;
        }
    }

    return k;
};
