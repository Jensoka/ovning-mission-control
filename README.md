1. map() går igenom varenda värde i array en efter en och  i detta fall tar den gamla arrayen --> gör en ny array med listpunkter för varje värde + nyckel

2. kniven ändrar originalarrayen - det vill vi inte. Med filter går vi igenom alla värden och filtrerar bort den man väljer att ta bort på knappen och skapar då sedan en ny array. I vårt fall använder vi filter till ta-bort knappen, och hade vi använt splice så hade inte React om-renderat den nya informationen.


3. Key är ett unikt ID så att React kan hålla koll på varje enskild listpunkt i vårt fall, det syns inte utåt till användaren utan hålls internt.

Sök filtrerar UI - den muterar inte state-listan