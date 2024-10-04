function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  } return true;
}

let value = isPrime(7);

value ? console.log("É primo!") : console.log("Não é primo!");
