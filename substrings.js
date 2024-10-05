function hasSubstring(str, substring) {
  return str.indexOf(substring) !== -1;
}

console.log(hasSubstring("Olá, mundo", "mundo"));
console.log(hasSubstring("Pudim de coco", "coco"));
console.log(hasSubstring("Carvão Vegetal", "mineral"));
