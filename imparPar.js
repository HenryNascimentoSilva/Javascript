function imparPar(num) {
  if (num % 2 == 0) {
    return true;
  }
  else return false;
}

value = imparPar(2)
if (value)  {
  console.log("O número é par");
} else {
  console.log("O número é impar");
}
