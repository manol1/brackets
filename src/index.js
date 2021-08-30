module.exports = function check(str, bracketsConfig) {

    const brackets = ['(', ')', '[', ']', '{', '}', '|',];
    const bracketsPair = {
      [')']: '(',
      [']']: '[',
      ['}']: '{',
      ['|']: '|',
    };
    
    const open = [];
    
    for (let i = 0; i < bracketsConfig.length; i++) {
      for (let j = 0; j < bracketsConfig[i].length; j++) {
        if (brackets.includes(bracketsConfig[i][j])) {
      
        } else {
          return false;
        }
      }
    }
    
    for (let i = 0; i < bracketsConfig.length; i++) {
     open[i] = bracketsConfig[i][0];
    }
    
    let stack = [];
        
    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      
      if (open.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        }
    
        let topElement = stack[stack.length - 1];
    
        if (bracketsPair[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    if (stack.length !== 0) {
        return true;
    }

    return stack.length === 0;
}
