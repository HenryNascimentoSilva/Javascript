function Divisibles(num) {
  let divisibles = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisibles.push(i);
    }
  }
  return divisibles;
}

console.log(Divisibles(60));
