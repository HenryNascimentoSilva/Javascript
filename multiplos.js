function isMulitple(num1, num2) {
  if (num1 % num2 === 0 || num2 % num1 === 0) return true;
  else return false;
}

console.log(isMulitple(2, 4));
