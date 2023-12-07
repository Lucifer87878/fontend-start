
//---------------------------------Datatyper-------------------------------------//
let datatypes = ['string', 'Number', 'Boolean', 'Null', 'Undefined'];

console.log(datatypes);

//----------------------------------------------------------------------//

let a = 1;
let b = '1';
if(a == b); // true 

console.log(a == b);

//------------------------------------------------------------------------//

let name1 = 'Greta Thunberg';

/*let är block-scopad, vilket innebär att dess synlighet är begränsad till det block (inom måsvingar {}) där den deklarerades. */

console.log(name1);
//----------------------------------------------------------------------//
var name2 = 'Greta Thunberg';

/* var är funktions-scopad, vilket innebär att dess synlighet är begränsad till funktionen där den deklarerades, 
eller om den inte deklarerades i en funktion, är den globalt synlig */

console.log(name2);

//----------------------------------------------------------------------//

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

//-------------------------------Block---------------------------------------//


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

//---------------------------------Strings---------------------------------------//


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

    let name = 'Goran';
    let N = 'Goran';
    
    let skrivUt = `Hej ${N} din gamle knasboll!`;
    
    console.log(skrivUt);

//--------------------------------Arrays----------------------------------------//

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


let a2 = ['My', 'has', 'many', 'open'];
let b2 = ['brain', 'to', 'tabs', '!'];

let mergea2b2 = [];

for (let i = 0; i < Math.max(a2.length, b2.length); i++) {
    mergea2b2.push(a2[i], b2[i]);
}

console.log(mergea2b2);

//------------------------------------------------------------------------//


let a3 = [1, 2, 7, 8, 9, 10];
let b3 = [3, 4, 5, 6];

a3.splice(2, 0, b3[0], b3[1], b3[2], b3[3]);

console.log(a3);

//------------------------------------------------------------------------//

let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];

let upperCaseNames = names.map(name => {
    return name.toUpperCase();
  });
  
  console.log(upperCaseNames);

//------------------------------------------------------------------------//

  let names1 = [
    { name: 'sixten', age: 32 },
    { name: 'Eva',    age: 19 }, 
    { name: 'Ali',    age: 67 },
    { name: 'Kim',    age: 13 },
    { name: 'Greger', age: 30 },
    { name: 'Alicia', age: 82 }
    ];

let age = names1.map( names1 => names1.age);

function checkAdult(personAge) 
{
    return personAge >= 30;  
}

let result = age.filter(checkAdult);

let nameOfAdult = names1.filter(person => person.age >= 30).map(person => person.name); // för att få ut namnen av dom också

console.log(nameOfAdult);

//------------------------------------------------------------------------//

let names2 = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];

let containsEwa = names2.includes('Ewa');

console.log(containsEwa);

//--------------------------------Loops----------------------------------------//


for (let i = 0; i <= 1000; i++) 
{
    console.log("Detta är nr: " + i);
}


for (let i = 100; i >= 0; i--)
console.log("Detta är nr: " + i);


let fruits5 = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
console.log(fruits5);

//------------------------------------------------------------------------//

function skapaKortlek() 
{
    const suits = ['Hearts','Clubs', 'Diamonds', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];

    let kortlek = [];

    for (let i = 0; i < suits.length; i ++){
        for(let v = 0; v < values.length; v++){
            let kort = 
            {
                suits: suits[i],
                values: values[v]
            };
            kortlek.push(kort);
        }
    }
    return kortlek;
}

const kortlek = skapaKortlek();

console.log(kortlek);

//----------------------------------Objects--------------------------------------//

let book = 
{
    title:'The Road to React',
    author:' Robin Wieruch',
    genres: ['Book']

};
console.log(book);

//------------------------------------------------------------------------//

let person = 
{
    name: 'Sixten Faceplant',
    email: 'sixten.faceplant@zocom.se',
    role: 'ninjah',
    adress: 
    {
        street: 'Karatevägen 3',
        zip: '41477',
        city: 'Kablam City'
    }
}

let containsCity = person.adress.city;

console.log(containsCity);

let clonename = person.name.slice();
console.log(clonename);

//------------------------------------------------------------------------//

let N1 = 'Fido';

let dog =
{
    name3:'Fido',
    bread:'mops',
    bark: [`Woff, jag heter ${N1}!`]
};


let skrivUtBark = dog.bark[0];

console.log(skrivUtBark);

//------------------------------------------------------------------------//

let person1 = 
{ 
    name: 'sixten',
    email: 'sixten@zocom.se', 
    role: 'ninjah',
    age: 32 
};

for (let key in person1) 
{
    let value = person1[key];
    console.log(`${key}: ${value}`);
}


//-------------------------------Functions-----------------------------------------//

let x1 = 9;

let y1 = 23;

let sumering = x1 + y1;

console.log(sumering);

let explainDifference = function() {
    return "En namngiven funktion har ett specifikt namn och kan refereras till genom det namnet. En anonym funktion har ingen specifik identifierare och används oftast när du bara behöver funktionen på ett ställe och inte kommer att referera till den igen.";
};

// Anropa funktionen och logga resultatet
console.log(explainDifference());





function extractYear(dateString) {
    return dateString.substring(0, 10);
}

let inputDate = '2023-12-07';
let getYear = extractYear(inputDate);

console.log(getYear); // Resultatet kommer att vara '2022'







function perfOperat(numer1, numer2, operator) {
    switch (operator) 
    {
        case '+':
            return numer1 + numer2;
    }
}

let result3 = perfOperat(5, 3, '+');
console.log(result3);

//-----------------------------------Conditionals-------------------------------------//

// fortsätt från uppgift    37