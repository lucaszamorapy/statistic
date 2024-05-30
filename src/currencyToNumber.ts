/**
 * Recebe string no formato 1.000,00 e retorna 1000.00 como número.
 * 

 */
export default function currencyToNumber(moeda: string): number | null {
  // Remove os pontos usados como separadores de milhar
  const numero = Number(moeda.replaceAll(".", "").replace(",", "."));

  // Verifica se o resultado é NaN (não é um número)
  return isNaN(numero) ? null : numero;
}
