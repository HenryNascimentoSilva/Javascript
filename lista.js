function listar(...nums) {
  let numbers = nums;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i + 1; j ++) {
      if (numbers[i] < numbers[j]) {
        let temp = numbers[i];

        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }
  return numbers;
}

console.log(listar(10, 3, 7, 2, 1));
