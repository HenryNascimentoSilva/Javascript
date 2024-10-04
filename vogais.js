function numVogais(str) {
  const vogais = ["a", "e", "i", "o", "u"];
  let contador = 0;

  for (let char of str) {
    if (vogais.includes(char)) {
      contador++;
    }
  }
  return contador;
}

console.log(numVogais("paralelepipedo"));
