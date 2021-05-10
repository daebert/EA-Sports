export async function getCharacters(id) {
  const promise = fetch(
    `https://cors.machens.koeln/https://www.easports.com/fifa/ultimate-team/api/fut/item?id=${id}`
    // `https://cors.machens.koeln/https://www.easports.com/fifa/ultimate-team/api/players/item?positionFull=${positionFull}`
  );

  const response = await promise;
  if (response.status === 404) {
    return {};
  }
  const data = await response.json();
  return data.items;
}

// fetch('https://futdb.app/api/players', {
//   method: 'POST',
//   headers: {
//     "X-AUTH-TOKEN": "afd090a0-4f2c-443c-8f61-b7103e66b0a2",
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     name: 'Mark'
//   })
// }).then(response => response.json()).then(console.log)

fetch("https://futdb.app/api/players", {
  method: "POST",
  headers: {
    "X-AUTH-TOKEN": "afd090a0-4f2c-443c-8f61-b7103e66b0a2",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Mark",
  }),
})
  .then((response) => response.json())
  .then(console.log);

export async function getCharacter(id) {
  const promise = fetch(
    `https://cors.machens.koeln/https://www.easports.com/fifa/ultimate-team/api/fut/item?id=${id}`
  );

  const response = await promise;
  if (response.status === 404) {
    return {};
  }
  const data = await response.json();
  return data.items[0];
}
