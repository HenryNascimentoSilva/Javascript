function multiplyList(list) {
  let result = 1;

  for (let i = 0; i < list.length; i++) {
    result *= list[i];
  }

  return result;
}

lista = [2, 2, 4];

console.log(multiplyList(lista));
