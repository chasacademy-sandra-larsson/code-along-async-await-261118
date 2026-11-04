# async, await och felhantering

Code-along i fem delar. Igår såg vi att `fetch` returnerar en promise. Idag skriver vi samma sak med `async` och `await`, och tar hand om det som går fel: svar som inte är ok, flera anrop på en gång, anrop som tar för lång tid och data som saknar fält.

## Kom igång

Öppna mappen i VS Code och starta Live Server i den del du arbetar med. Ha DevTools (F12) öppet med **Console** synlig.

Varje `js/main.js` har numrerade steg och `TODO`. Gör dem i ordning, och **gissa innan du kör**.

Del 3 och 4 använder `https://httpbin.org/delay/<sekunder>`, som svarar först efter några sekunder. Den är ibland långsam eller nere. Då får du ett nätverksfel, och det är också något att hantera.

## Del 1: async och await

`1-async-await/`

1. Gårdagens promise-kedja, skriven med `async`, `await` och `try`/`catch`.
2. En async-funktion returnerar alltid en promise.
3. Vad loggas? Var hamnar koden efter `await`?
4. `await` på toppnivå i en modul.

## Del 2: Felhantering

`2-felhantering/`

1. `fetch` kastar inte fel vid 404. Kolla `response.ok`.
2. Skriv en egen `fetchJson(url)` som kastar fel när svaret inte är ok.
3. Tre lägen på sidan: laddar, fel och lyckat, med `finally`.
4. Var ska felet fångas?

## Del 3: Flera anrop

`3-flera-anrop/`

1. Tre anrop, ett i taget. Mät tiden.
2. Samma tre med `Promise.all`.
3. Ett av dem misslyckas: `Promise.all` mot `Promise.allSettled`.
4. `Promise.race` mot en timeout.

## Del 4: Avbryta

`4-avbryta/`

1. Ett anrop som tar fem sekunder och en knapp som inte kan avbryta det.
2. `AbortController` och `signal`.
3. Avbrutet är inte samma sak som fel: `AbortError`.
4. `AbortSignal.timeout(ms)`.

## Del 5: Data som saknar fält

`5-saknade-falt/`

Användare i `data/users.json` där alla fält inte finns. Optional chaining `?.`, och `??` mot `||` för reservvärden.

## Begrepp

| Begrepp | Betyder |
|---|---|
| `async` | Funktionen returnerar alltid en promise, och får använda `await` |
| `await` | Pausar funktionen tills promisen är klar. Resten av programmet fortsätter |
| `response.ok` | `true` för status 200–299. `fetch` kastar inte fel vid 404 eller 500 |
| `finally` | Körs alltid, oavsett om det gick bra eller inte |
| `Promise.all` | Väntar på alla. Ger upp vid första felet |
| `Promise.allSettled` | Väntar på alla och berättar hur det gick för var och en |
| `Promise.race` | Den första som blir klar, eller misslyckas, vinner |
| `AbortController` | Avbryter ett `fetch`-anrop via `signal` |
| `?.` | Optional chaining. Ger `undefined` i stället för ett fel om något saknas |
| `??` | Nullish coalescing. Ett reservvärde bara för `null` och `undefined` |

## Efter passet

- Gör klart del 4 och 5 om du inte hann.
- Workshoppen i morgon bygger en väderapp med allt det här.
