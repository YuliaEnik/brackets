module.exports = function check(str, bracketsConfig) {
  let open = [];
  let close = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }
  let newArray = [];
  let isAlreadyAdded = false;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (open.includes(str[i])) {
      newArray.push(str[i]);
      if (close.includes(str[i])) {
        isAlreadyAdded = true;
        count += 1;
      }
    } else {
      if (close.indexOf(str[i]) === open.indexOf(newArray[newArray.length - 1])) {
        newArray.pop();
      } else {
        return false;
      }
    }
    if (isAlreadyAdded && count >= 2) {
      if (newArray[newArray.length -1] === newArray[newArray.length - 2]) {
        newArray.pop();
        newArray.pop();
        count -= 2;
        if (count === 0) {
          isAlreadyAdded = false;
        }
      } 
    }
  } return newArray.length === 0;
}
