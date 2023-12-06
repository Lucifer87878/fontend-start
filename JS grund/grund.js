
let datatypes = ['string', 'Number', 'Boolean', 'Null', 'Undefined'];

console.log(datatypes);

//----------------------//

let a = 1;
let b = '1';
if(a == b); // true 

console.log(a == b);

//------------------------------------------------------------------------//

let name1 = 'Greta Thunberg';

/*let är block-scopad, vilket innebär att dess synlighet är begränsad till det block (inom måsvingar {}) där den deklarerades. */

console.log(name1);
//-------------------------------------------//
var name2 = 'Greta Thunberg';

/* var är funktions-scopad, vilket innebär att dess synlighet är begränsad till funktionen där den deklarerades, 
eller om den inte deklarerades i en funktion, är den globalt synlig */

console.log(name2);

//-----------------------------------------------------------------------//

/*  

frågan är nr 4. Hur tar man reda på vad en variabel har för datatyp?
Svaret är Typeof som man kan se i exemplet under.... 

*/

let x = 87;
let y = 'Hello, World!';
let z = true;

console.log(typeof x); // "number"
console.log(typeof y); // "string"
console.log(typeof z); // "boolean"

//----------------------------------------------------------------------//


/*
5 Vilken av följande tecken visar ett kodblock?

[] // A 
() // B
{} // C 

Rätt svar är C

*/

