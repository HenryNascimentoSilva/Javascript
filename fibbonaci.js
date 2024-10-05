function fibbonaci(num) {
  fib = [0, 1];
  for (let i = 2; i < num + 1; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

  console.log(fibbonaci(7));
