// Importa a biblioteca numeral, que é usada para formatação de números
import numeral from 'numeral';

// ----------------------------------------------------------------------

// Função para formatar um número usando a formatação padrão da biblioteca numeral
export function fNumber(number) {
  return numeral(number).format();
}

// Função para formatar um número como uma moeda, com duas casas decimais e um símbolo de dólar
export function fCurrency(number) {
  const format = number ? numeral(number).format('$0,0.00') : '';

  return result(format, '.00');
}

// Função para formatar um número como uma porcentagem, com uma casa decimal
export function fPercent(number) {
  const format = number ? numeral(Number(number) / 100).format('0.0%') : '';

  return result(format, '.0');
}

// Função para formatar um número em um formato abreviado (por exemplo, 1k para 1000, 1m para 1000000, etc.)
export function fShortenNumber(number) {
  const format = number ? numeral(number).format('0.00a') : '';

  return result(format, '.00');
}

// Função para formatar um número em um formato de dados (por exemplo, 1b para 1000000000, etc.)
export function fData(number) {
  const format = number ? numeral(number).format('0.0 b') : '';

  return result(format, '.0');
}

// Função auxiliar para remover casas decimais desnecessárias de um número formatado
function result(format, key = '.00') {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, '') : format;
}