// Del 2: Felhantering

// 1. fetch kastar bara fel när nätverket inte svarar
// TODO: Kör. Användare 999 finns inte. Kastas något fel? Vad är response.status och response.ok?
const tryIt = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/999');
    console.log('1.', response.status, response.ok);
    const user = await response.json();
    console.log('1. Användaren:', user);
  } catch (error) {
    console.error('1. Fel:', error.message);
  }
};
tryIt();

// 2. En egen hjälpfunktion som kastar fel vid 404 och 500
// TODO: Skriv fetchJson(url). Den ska
//       - anropa fetch
//       - kasta new Error(`HTTP ${response.status}`) om response.ok är false
//       - annars returnera await response.json()

// 3. Tre lägen på sidan: laddar, fel och lyckat
const status = document.querySelector('#status');

// TODO: Skriv showUser(id) som
//       - visar 'Laddar...' i status och stänger av knapparna
//       - hämtar användaren med fetchJson
//       - visar namnet om det lyckas, och ett begripligt fel om det inte gör det
//       - sätter på knapparna igen i finally, oavsett hur det gick

document.querySelectorAll('button[data-id]').forEach((button) => {
  button.addEventListener('click', () => {
    // TODO: anropa showUser(button.dataset.id)
  });
});

// 4. Var ska felet fångas?
// TODO: Diskutera. Ska fetchJson själv ha try/catch och logga felet? Varför inte?
