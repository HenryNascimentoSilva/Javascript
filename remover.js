function spaceRemover(str) {
  str = str.split(' ').join('');
  return str;
}

console.log(spaceRemover("frase com espaços"));
