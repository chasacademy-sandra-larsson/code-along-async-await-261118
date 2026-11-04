// Del 5: Data som saknar fält

const response = await fetch('data/users.json');
const users = await response.json();
console.table(users);

// 1. Ett fält som saknas
// TODO: Logga users[1].address.city. Vad händer?

// 2. Optional chaining ?.
// TODO: Skriv om med ?. så att du får undefined i stället för ett fel.

// 3. Ett reservvärde med ?? och ||
// TODO: Logga för varje användare:
//       user.orders || 'okänt'  och  user.orders ?? 'okänt'
//       user.nickname || user.name  och  user.nickname ?? user.name
//       När skiljer de sig åt? Vilken är rätt för orders?

// 4. Rendera listan
const list = document.querySelector('#users');
// TODO: Visa varje användare som ett li: namn, stad (eller 'Okänd stad') och antal beställningar
//       (eller 'okänt'). Ingen rad får visa undefined eller null.
