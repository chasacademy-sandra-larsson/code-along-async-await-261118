// Del 3: Flera anrop

const fetchJson = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return await response.json();
};

const userUrl = (id) => `https://jsonplaceholder.typicode.com/users/${id}`;

// 1. Ett i taget
// TODO: Kör. Hur lång tid tar det?
const oneAtATime = async () => {
  console.time('1. Ett i taget');
  const a = await fetchJson(userUrl(1));
  const b = await fetchJson(userUrl(2));
  const c = await fetchJson(userUrl(3));
  console.timeEnd('1. Ett i taget');
  console.log('1.', [a.name, b.name, c.name]);
};

// 2. Alla samtidigt med Promise.all
// TODO: Skriv allAtOnce() som hämtar samma tre användare med Promise.all.
//       Mät tiden på samma sätt. Varför går det fortare?

// 3. Ett av anropen misslyckas
// TODO: Byt användare 3 mot 999 i Promise.all. Vad händer med de två som lyckades?
// TODO: Prova Promise.allSettled i stället. Vad får du tillbaka?

// 4. Promise.race: den som blir klar först vinner
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const timeout = (ms) =>
  wait(ms).then(() => {
    throw new Error(`Tog längre än ${ms} ms`);
  });

// TODO: Låt https://httpbin.org/delay/3 (svarar efter tre sekunder) tävla mot timeout(2000).
//       Vem vinner? Ändra till timeout(5000).

// Kör en sak i taget:
await oneAtATime();
