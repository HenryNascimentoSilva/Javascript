function fatorial(num) {
  let resultado = 1;
  
  for (let i = 1; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}

let fun = fatorial(4);
console.log(fun);
