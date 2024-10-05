function squareRoot(num) {
  if (num < 0) return NaN;

  let x = num;
  let y = 1;
  const e = 0;
 
  while (x - y > e) {
    x = (x + y) / 2;
    y = num / x;
  }

  return x;
  
}

console.log(squareRoot(9));
console.log(squareRoot(49));
console.log(squareRoot(16));
