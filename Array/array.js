// en simpel array 

let fruits = ['kiwi', 'apple', 'pear'];

let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']

let newAnimal = animals.push("dog");

console.log(newAnimal);

// antal av olika objekt i en array
console.log(fruits.length); //frukter
console.log(animals.length); //djur


// hämta något specifikt ur arrayen
console.log(fruits[0]); // Hämta kiwi
console.log(animals[3]); // Hämta funky chihuahua 

console.log(animals[0]);// uppgift 3-5


// bytta ut olika värden i en array
animals[1] = 'tiger'; // Byt ut 'hamster' mot 'tiger'
fruits[1] = 'Bannan'; // Byt ut 'apple' mot 'Bannan'

console.log(animals[1]); // uppgift 6
console.log(fruits[1]);



//------------------------simpla delen-------------------------//

//------------------------mer anvancerade delen för mig-------jag behöver öva mer------------------//
let a = [1, 2, 3];
let b = [4, 5, 6];
let mergedArray = a.concat(b); // [1, 2, 3, 4, 5, 6]

console.log(a);
console.log(b);
console.log(mergedArray);

//------------------------------//

let a1 = [1,2,3,7,8,9];
let b1 = [4,5,6];

// Använder splice för att infoga info från array "lista" b1 vid index 3 i array a1
a.splice(4,5,6);

console.log(a1);
console.log(b1);

//----------slut på uppgift 8----------//

// clona en lista "array" utan att repetera sig själv av inehåll

let arr = ['a','b','c'];
let clonedArr = arr.slice();

console.log(arr);
console.log(clonedArr);

//-----------slut på uppgift 9---------------------//

//--uppgift 10-15-------Methods--------//

//-----.push()"till läg ett eller flera objekt i slutet av listan" 
//.unshift() "tilläg ett eller flera objekt i början av array 'listan' " 
//.pop() "för att ta bort sista i lista", 
//.shift() "används för att ta bort det första elementet från en array"
//.splice() "används för att ändra innehållet i en array genom att ta bort eller ersätta befintliga element och/eller lägga till nya element" 
//.includes() "Den används för att avgöra om en array eller en sträng innehåller ett specifikt värde och returnerar true om värdet finns, annars returnerar den false."
//.indexOf() "används för att söka efter ett specifikt element i en array eller en viss del av en sträng."
//.substring() " Metoden tar två argument, startindex och slutindex, och returnerar den extraherade delen som en ny sträng"
//.reverse()  "För att skriva ut arrayen i omvänd ordning"
//-------------------//

let newFruits = fruits.push("monkey-banana");
console.log(fruits);

//-----tilläg av frukt i början av arrayen 
fruits.unshift("orange")

console.log(fruits);

fruits.pop();

console.log(fruits);

fruits.shift();

console.log(fruits);

fruits.splice(1,0,"orange")

console.log(fruits);

fruits.splice(2,0,"Monkey-banana","Guwana","cherry")

console.log(fruits);

//--------------------klar uppgift 10-15---------------------------//

//------------------------uppgift 16-22-----------------------------------------//


let names = ['David', 'Christoffer', 'Johan', 'Maja', 'Andreas']

names.splice(1,2);

console.log(names);

//-----------------------------//

let nums = [1,2,3,4,5,6,7,8,9];

console.log(nums);

nums.reverse();

console.log(nums);
 
//-------------uppgift 18-22 ----------------------//

let str = 'Supercalifragilisticexpialidocious';

let containsN = str.includes('n');

let containsX = str.includes('x');

let positin_of_P = str.indexOf('p');

let stringposition5 = str[4];

let last7characters = str.slice(-7);

console.log(str);

console.log(containsN);

console.log(containsX);

console.log(positin_of_P);

console.log(str.length);

console.log(stringposition5);

console.log(last7characters);

//-----.filter()-----//

let numArray = [23, 45, 5, 62, 1, 21, 3, 54];

let arrayFilter = numArray.filter(num => num >=5);

console.log(arrayFilter);

let arrayFilter2 = numArray.filter(num => num <=5);

console.log(arrayFilter2);

//-------------------------------------------------------//


let persons = [
    {
        name: "Felicia",
        age: 12
    },
    {
        name: "Pelle",
        age: 20
    },
    {
        name: "Peter",
        age: 59
    },
    {
        name: "Anna",
        age: 32
    },
    {
        name: "Jocke",
        age: 18
    },
    {
        name: "Ella",
        age: 3
    }
];

console.log(persons);

let age = persons.map( person => person.age);

function checkAdult(personAge) 
{
    return personAge >= 18;  // för att underlätta för mig genom att bytta ut > till < så för man svar för fråga 24    
}

let result = age.filter(checkAdult);

console.log(result);

