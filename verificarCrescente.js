function verify(list) {
  for (let i = 0; i <= list.length; i ++) {
    if (list[i] > list[i + 1]) return false;
  }
  return true;
}

const lista1 = [1,2,3];
const lista2 = [3,2,1];
const lista3 = [1, 2, 3, 1];
const lista4 = [3,2,1,4];

console.log(verify(lista1));
console.log(verify(lista2));
console.log(verify(lista3));
console.log(verify(lista4));
