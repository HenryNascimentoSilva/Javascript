let contador = 0;
let historico = [];
let temporizador;

document.getElementById('calcular').addEventListener('click', function () {
  let valorTransacao = parseFloat(document.getElementById('valor-transacao').value);
  let complexidade = document.getElementById('complexidade').value;
  let moedaConversao = document.getElementById('moeda-conversao').value;
  let valorContador = document.getElementById('contador');
  let precoGas;
  let taxaConversao = {USD: 5, EUR: 6};

  if (valorTransacao <= 0 || isNaN(valorTransacao)) {
    document.getElementById('resultado').innerHTML = '<p style="color:red;"> Por favor, insira um valor de transação válido.</p>';
    return;
  }

  switch(complexidade) {
    case 'baixa':
      precoGas = 0.01;
      break;
    case 'media':
      precoGas = 0.05;
      break;
    case 'alta':
      precoGas = 0.1;
      break;
  }

  let custoGas = valorTransacao * precoGas;
  let valorConvertido = custoGas * taxaConversao[moedaConversao];

  document.getElementById('resultado').innerHTML = `
  <p> Valor da Transação: ${valorTransacao} DOT </p>
  <p> Complexidade: ${complexidade.charAt(0).toUpperCase() + complexidade.slice(1)}</p>
  <p><strong>Custo estimado do Gas: ${custoGas.toFixed(2)} DOT </strong></p>
  <p><strong>Custo estimado do Gas em ${moedaConversao}: ${valorConvertido.toFixed(2)} ${moedaConversao}</strong></p>`

  contador++;
  valorContador.innerHTML= `<p>Contador : ${contador}</p>`;

  historico.push({ valorTransacao, complexidade, custoGas});
  atualizarHistorico();

  if (temporizador) clearTimeout(temporizador);
  temporizador = setTimeout(() => {
    historico = [];
    atualizarHistorico();
  }, 60000);
});

function atualizarHistorico() {
  let listaHistorico = document.getElementById('lista-historico');
  listaHistorico.innerHTML = '';
  historico.forEach(transacao => {
    let li = document.createElement('li');
    li.textContent = `Valor : ${transacao.valorTransacao} DOT, Complexidade: ${transacao.complexidade}. Custo: ${transacao.custoGas.toFixed(2)} DOT`;
  listaHistorico.appendChild(li);
  })
}
