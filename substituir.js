function substituirVogais(str) {
  let resultado = '';
  const vogais = 'aeiouAEIOU';

  for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
      resultado += "*";
    } else {
      resultado += str[i];
    }
  }

  return resultado;
}

console.log(substituirVogais("paralelepipedo"));
