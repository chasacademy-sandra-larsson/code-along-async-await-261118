// Del 1: async och await

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 1. Igår: en promise-kedja
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => response.json())
  .then((user) => console.log('1. Med then:', user.name))
  .catch((error) => console.error(error));

// TODO: Skriv samma sak som en async-funktion med await och try/catch.

// 2. En async-funktion returnerar alltid en promise
const getNumber = async () => 42;
// TODO: Logga getNumber(). Vad får du? Hur får du ut 42?

// 3. Vad loggas?
// TODO: Gissa ordningen och kör. Var i event loopen hamnar koden efter await?
const demo = async () => {
  console.log('3. A');
  await wait(0);
  console.log('3. B');
};
// demo();
// console.log('3. C');

// 4. await på toppnivå
// I en modul (type="module") får du använda await utanför en funktion.
// TODO: Hämta https://jsonplaceholder.typicode.com/todos?userId=1 med await direkt här,
//       och logga hur många todos som är klara (completed).
