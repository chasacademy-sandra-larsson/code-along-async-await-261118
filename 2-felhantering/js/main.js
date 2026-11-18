// Del 2: Felhantering

// 1. fetch kastar bara fel när nätverket inte svarar
// TODO: Kör. Användare 999 finns inte. Kastas något fel? Vad är response.status och response.ok?
const tryIt = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/998');
    console.log('1.', response.status, response.ok);
    const user = await response.json();
    console.log('1. Användaren:', user);
  } catch (error) {
    console.error('1. Fel:', error.message);
  }
};
//tryIt();

// 2. En egen hjälpfunktion som kastar fel vid 404 och 500
// TODO: Skriv fetchJson(url). Den ska
//       - anropa fetch
//       - kasta new Error(`HTTP ${response.status}`) om response.ok är false
//       - annars returnera await response.json()

const fetchJson = async (url) => {
    try {
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error(`HTTP ${response.stats}`);
    }
    return response.json();

  } catch (error) {
    console.error('1. Fel:', error.message);
  }
}

// 3. Tre lägen på sidan: laddar, fel och lyckat
const status = document.querySelector('#status');
const buttons = document.querySelectorAll('button[data-id]');

// TODO: Skriv showUser(id) som
const showUser = async (id) => {

  // - visar 'Laddar...' i status och stänger av knapparna
  status.textContent = "Laddar... ";
  buttons.forEach((button) => (button.disabled = true));

  //       - hämtar användaren med fetchJson

  try {
    const user = await fetchJson(`https://jsonplaceholder.typicode.com/users/${id}`);
  // visar namnet om det lyckas, och ett begripligt fel om det inte gör det
    status.textContent = `Hittade användare ${user.name}`;
  } catch(error) {
    status.textContent = `Kunde inte hämta användare ${id} Försök igen. `
  }  finally {
// - sätter på knapparna igen i finally, oavsett hur det gick
    buttons.forEach((button) => (button.disabled = false));

  }

}


document.querySelectorAll('button[data-id]').forEach((button) => {
  button.addEventListener('click', () => {
    // TODO: anropa showUser(button.dataset.id)
      showUser(button.dataset.id);

  });
});

// 4. Var ska felet fångas?
// TODO: Diskutera. Ska fetchJson själv ha try/catch och logga felet? Varför inte?
