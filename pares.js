function pares(list) {
  let result = 0;

  for (let i = 0; i < list.length; i ++) {
    if (list[i] % 2 == 0) result += list[i];
  }

  return result;
}

lista = [1,2,3,4,5,6,7,8,9,10,11,12];

console.log(pares(lista));
