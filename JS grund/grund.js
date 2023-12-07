
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

//------------------------------------------------------------------------//

/*

detta är en alert popup efter man klikar på knapp som skall vara kopplat till denna kod. 
som skall skriva ut ......Ariba!......



el.on('click', () => {
    alert('Ariba!');
})

*/


//------------------------------------------------------------------------//

var greeting = 'Good bye world!';

{
    let greeting = 'Hello World';
}

console.log(greeting);

// svaret är Good bye world! 

//------------------------------------------------------------------------//


//  Vilken av följande syntax är korrekt sätt att skriva strängar.
/* 
Det finns två rätt svar och det är "A" & 'B'

"Hello World" // A 
'Hello World' // B
`Hello World` // C

*/

//------------------------------------------------------------------------//


// 9 Räkna antal tecken i strängen nedan.

// rätt svar 97 st

let sentence = "If you're having code problems I feel bad for you son. I got 99 problems, but a glitch ain't one."

console.log(sentence.length);


//------------------------------------------------------------------------//

{
    let name = 'Goran';
    let N = 'Goran';
    
    let skrivUt = `Hej ${N} din gamle knasboll!`;
    
    console.log(skrivUt);
}

//------------------------------------------------------------------------//

let fruit = ['Banana', 'Orange', 'Kiwi', 'apple', 'pear'];
console.log(fruit);


fruit.unshift('cherry');
fruit.push('Guana')
console.log(fruit);



fruit.pop();
fruit.shift();
console.log(fruit);


fruit.splice(2,0,'green-apple','green-banana');
console.log(fruit);


let fruits = ['apple', 'orange', 'pear', 'kiwi'];
fruits[0] = 'pineapple';
console.log(fruits);

let clonedFruits = fruits.slice();
console.log(clonedFruits);

//------------------------------------------------------------------------//


let num = [1,5,78,7,122,3,4,65,40,2,8]

num.sort(function(a,b){return a - b;});
console.log(num);

//------------------------------------------------------------------------//

let a1 = [1,2,3];
let b1 = [4,5,6];

let mergedArray = a1.concat(b1);
console.log(mergedArray);

//------------------------------------------------------------------------//


