// Del 4: Avbryta

const status = document.querySelector('#status');
const SLOW_URL = 'https://httpbin.org/delay/5'; // svarar efter fem sekunder

// 1. Ett anrop som tar tid
// TODO: Klicka på Starta. Klicka på Avbryt. Händer något?
let controller = null;

document.querySelector('#start').addEventListener('click', async () => {
  controller?.abort();
  controller = new AbortController();
  status.textContent = 'Hämtar...';
  try {
    const response = await fetch(SLOW_URL, { signal: controller.signal });
    await response.json();
    status.textContent = 'Klart!';
  } catch (error) {

    status.textContent = error.name === "AbortError" ? "Avbrytet" : `Fel ${error.message}`;
  }
});

document.querySelector('#cancel').addEventListener('click', () => {
  // TODO
  controller?.abort();
});

// 2. AbortController
// TODO: Skapa en ny AbortController när du klickar på Starta, och skicka med
//       { signal: controller.signal } som andra argument till fetch.
//       Anropa controller.abort() när du klickar på Avbryt.

// 3. Avbrutet är inte samma sak som fel
// TODO: Logga error.name i catch. Visa 'Avbrutet' om det är 'AbortError', annars felet.

// 4. Timeout utan egen kod
// TODO: Prova { signal: AbortSignal.timeout(2000) } i ett eget fetch-anrop mot SLOW_URL.
//       Vad heter felet nu?

const fetchWithTimeout = async (ms) => {
  try {
     await fetch(SLOW_URL, { signal: AbortSignal.timeout(ms)}) 
     console.log("hämtat")
  } catch(error) {
    if (error.name === "TimeoutError") {
    console.error("Anropet tog för lång tid");
  } else if (error.name === "AbortError") {
    console.error("Anropet avbröts");
  } else {
    throw error;
  }
  }
}


fetchWithTimeout(2000);