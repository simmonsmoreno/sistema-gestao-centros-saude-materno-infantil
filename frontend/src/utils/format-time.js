// Importa as funções 'format', 'getTime' e 'formatDistanceToNow' da biblioteca 'date-fns'
import { format, getTime, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

// Função para formatar uma data em um formato específico
export function fDate(date, newFormat) {
  // Define o formato padrão como 'dd MMM yyyy' se nenhum formato for fornecido
  const fm = newFormat || 'dd MMM yyyy';

  // Retorna a data formatada se uma data for fornecida, caso contrário retorna uma string vazia
  return date ? format(new Date(date), fm) : '';
}

// Função para formatar uma data e hora em um formato específico
export function fDateTime(date, newFormat) {
  // Define o formato padrão como 'dd MMM yyyy p' se nenhum formato for fornecido
  const fm = newFormat || 'dd MMM yyyy p';

  // Retorna a data e hora formatadas se uma data for fornecida, caso contrário retorna uma string vazia
  return date ? format(new Date(date), fm) : '';
}

// Função para obter o timestamp de uma data
export function fTimestamp(date) {
  // Retorna o timestamp se uma data for fornecida, caso contrário retorna uma string vazia
  return date ? getTime(new Date(date)) : '';
}

// Função para formatar a distância de tempo até agora
export function fToNow(date) {
  // Retorna a distância de tempo até agora se uma data for fornecida, caso contrário retorna uma string vazia
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}