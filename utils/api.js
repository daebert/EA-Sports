export async function getCharacters(id) {
  const promise = fetch(
    `https://cors.machens.koeln/https://www.easports.com/fifa/ultimate-team/api/fut/item?id=${id}`
  );

  const response = await promise;
  if (response.status === 404) {
    return {};
  }
  const data = await response.json();
  return data.items;
}
