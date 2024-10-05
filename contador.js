function contarLetras(str) {
  let letra = "e";
  let contador = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letra) contador++;
  }
  return contador;
}

console.log(`A letra e apareceu ${contarLetras("paralelepipedo")} vezes`);
