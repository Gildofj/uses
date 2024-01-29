export function removerAccents(texto: string) {
  return texto
    .normalize("NFD") // Normaliza a string para decompor os caracteres acentuados em caracteres simples e seus diacríticos
    .replace(/[\u0300-\u036f]/g, ""); // Remove os diacríticos (caracteres de acentuação)
}
