// Help soultion 

var isValid = function(s) {
  const memory = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch === '(' || ch === '[' || ch === '{') {
      memory.push(ch);
    } else {
      const last = memory.pop();

      if (
        (ch === ')' && last !== '(') ||
        (ch === ']' && last !== '[') ||
        (ch === '}' && last !== '{')
      ) {
        return false;
      }
    }
  }

  return memory.length === 0;
};
