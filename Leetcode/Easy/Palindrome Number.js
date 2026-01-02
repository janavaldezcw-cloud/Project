// My soultion 
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const s = String(x);
    const rev = s.split('').reverse().join('');
         if (s === rev) {
            return true 
         } else {return false }
};


/// Fastest soultion 

var isPalindrome = function (x) {
  const s = String(x);
  let l = 0, r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
};