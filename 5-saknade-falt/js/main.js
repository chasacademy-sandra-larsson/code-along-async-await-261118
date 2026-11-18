// Del 5: Data som saknar fält

const response = await fetch('data/users.json');
const users = await response.json();
console.table(users);

// 1. Ett fält som saknas
// TODO: Logga users[1].address.city. Vad händer? - Vi får en TypeError
//console.log("1. ", users[1].adress.city)

// 2. Optional chaining ?.
// TODO: Skriv om med ?. så att du får undefined i stället för ett fel.
//console.log("2 ", users[1].adress?.city)

// 3. Ett reservvärde med ?? och ||
// TODO: Logga för varje användare:
//       user.orders || 'okänt'  och  user.orders ?? 'okänt'
//       user.nickname || user.name  och  user.nickname ?? user.name
//       När skiljer de sig åt? Vilken är rätt för orders?

for (const user of users) {
console.log("3. ", user.name, user.orders || 'okänt', user.orders ?? 'okänt')
}


// 4. Rendera listan
const list = document.querySelector('#users');
// TODO: Visa varje användare som ett li: namn, stad (eller 'Okänd stad') och antal beställningar
//       (eller 'okänt'). Ingen rad får visa undefined eller null.

const html = users.map((user) => {
    const li = document.createElement("li");
    const city = user.adress?.city ?? "Okänd stad"
    const orders = user.orders ?? "okänt"
    li.textContent = `${user.name}, ${city}, beställningar ${orders}`;
    return li;
})

list.append(...html);