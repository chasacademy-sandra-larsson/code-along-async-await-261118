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
  const a = await fetchJson(userUrl(3));
  const b = await fetchJson(userUrl(2));
  const c = await fetchJson(userUrl(3));
  console.timeEnd('1. Ett i taget');
  console.log('1.', [a.name, b.name, c.name]);
};

//oneAtATime();

// 2. Alla samtidigt med Promise.all
// TODO: Skriv allAtOnce() som hämtar samma tre användare med Promise.all.
//       Mät tiden på samma sätt. Varför går det fortare?

const allAtOnce = async () => {
  console.time('2. Alla samtidigt');
  const users = await Promise.all([fetchJson(userUrl(1)), fetchJson(userUrl(2)), fetchJson(userUrl(3))])
  console.timeEnd('2. Alla samtidigt');
  console.log('2.', users.map((user) => user.name));
};
//allAtOnce();

// 3. Ett av anropen misslyckas
// TODO: Byt användare 3 mot 999 i Promise.all. Vad händer med de två som lyckades?
// TODO: Prova Promise.allSettled i stället. Vad får du tillbaka?

const allFails = async () => {
  try {
    // Promise.all - om ett anrop misslyckas blir det fel på hela anropet. Ger vid första fail. 
    const users = await Promise.all([fetchJson(userUrl(1)), fetchJson(userUrl(2)), fetchJson(userUrl(999))])
    console.log("3. Hämtatade användare: ", users)
  } catch(error) {
    console.log("3. Promise.all: ", error.message)
  }

}
//allFails()

const allSettled = async () => {
  try {
    // Promise.allSettled - väntar på alla anrop och ger information hur det fick för var och en. 
    const users = await Promise.allSettled([fetchJson(userUrl(1)), fetchJson(userUrl(2)), fetchJson(userUrl(999))])
    console.log("3. Promise.allSettled: ", users.map((result) => (result.status === "fulfilled" ? result.value.name : `fel ${result.reason.message}`)),);
  } catch(error) {
    console.log("3. Promise.allSettled: ", error.message)
  }

}
//allSettled();

// 4. Promise.race: den som blir klar först vinner
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const timeout = (ms) =>
  wait(ms).then(() => {
    throw new Error(`Tog längre än ${ms} ms`);
  });

// TODO: Låt https://httpbin.org/delay/3 (svarar efter tre sekunder) tävla mot timeout(2000).
//       Vem vinner? Ändra till timeout(5000).

const race = async (ms) => {
  try {
    const result = await Promise.race([fetchJson("https://httpbin.org/delay/3"), timeout(ms)]);
    console.log(`4. Svaret hann före ${ms} ms`);
  } catch(error) {
    console.log("4. ", error.messge);
  }
}

// Kör en sak i taget:
//await oneAtATime();

// await race(2000); // inget fel, inom timeout
await race(5000);   // svaret är längre än timeout