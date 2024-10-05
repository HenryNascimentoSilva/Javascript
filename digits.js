function contarDigitos(num) {
  let str = String(num);
  let values = str.split("");
  let nums = [];
  let result = 0;

  for (let i = 0; i < values.length; i++) {
    let value = parseInt(values[i]);
    nums.push(value);
    result += nums[i];
  }
  
  return result;
}

console.log(contarDigitos(999));
