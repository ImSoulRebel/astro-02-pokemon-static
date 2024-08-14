export function extractPokemonId(url: string): number | null {
  // Definimos la expresión regular para capturar el ID al final de la URL.
  const regex = /\/pokemon\/(\d+)\//;
  const match = url.match(regex);

  // Si se encuentra una coincidencia, se devuelve el ID como número.
  if (match && match[1]) {
    return parseInt(match[1], 10);
  }

  // Si no se encuentra una coincidencia, se devuelve null.
  return null;
}
