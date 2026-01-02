// MY 


    /**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let ans = 0
   const romanNumerals = [
  { value: 1000, symbol: "M" },
  { value: 900,  symbol: "CM" },
  { value: 500,  symbol: "D" },
  { value: 400,  symbol: "CD" },
  { value: 100,  symbol: "C" },
  { value: 90,   symbol: "XC" },
  { value: 50,   symbol: "L" },
  { value: 40,   symbol: "XL" },
  { value: 10,   symbol: "X" },
  { value: 9,    symbol: "IX" },
  { value: 5,    symbol: "V" },
  { value: 4,    symbol: "IV" },
  { value: 1,    symbol: "I" }
];
   for (let i = 0; i < romanNumerals.length; i++) {
        while (s.startsWith(romanNumerals[i].symbol)) {
            ans += romanNumerals[i].value;
            s = s.slice(romanNumerals[i].symbol.length);
        }
    }
    
    return ans;
};


// Fastest 

var romanToInt = function(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = map[s[i]];
        const next = map[s[i + 1]];

        if (next > curr) {
            total -= curr;
        } else {
            total += curr;
        }
    }

    return total;
};