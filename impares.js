function impares(list) {
  let contador = 0;

  for (let num of list) {
    if (num % 2 !== 0) {
      contador ++;
    } 
  }

  return contador
} 

lista1 = [1,2,3,4,5,6,7];
lista2 = [3,5,7,9];
lista3 = [2,4,6,8];

console.log(impares(lista1));
console.log(impares(lista2));
console.log(impares(lista3));

