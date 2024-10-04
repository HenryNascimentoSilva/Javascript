function isPresent(num) {
   list = [ 2, 3, 7];

  for (let i = 0; i < list.length; i++) {
    if (list[i] == num) {
      return true;
    }
  }
  return false;
}

console.log(isPresent(5));
console.log(isPresent(7));
