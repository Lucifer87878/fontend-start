
let books = [
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        numPages: 180
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        numPages: 281
    },
    {
        title: '1984',
        author: 'George Orwell',
        numPages: 328
    },
    {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        numPages: 224
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        numPages: 432
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        numPages: 310
    },
    {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        numPages: 374
    },
    {
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        numPages: 489
    }
];


console.log(books);


function search(books, input) 
{
    let result = books.filter(item => item.title.toLowerCase().includes(input.toLowerCase()));
    return result;
}

let searchTerm = 'The';
let searchResult = search(books, searchTerm);
console.log(searchResult);

//--------------------------------------------------------------------------------------------------//

/*
charCount är ett objekt som används för att lagra teckenräkningen. 
Varje tecken i strängen kommer att vara en nyckel i objektet, och värdet kommer att vara antalet gånger tecknet förekommer i strängen.

for...of-loopen itererar över varje tecken i strängen.

charCount[char] = (charCount[char] || 0) + 1; ökar räkningen för det aktuella tecknet. Om tecknet redan finns i objektet, 
ökar vi räkningen med 1. Om tecknet inte finns, sätter vi räkningen till 1.

Slutligen returneras det färdiga objektet charCount.
*/

function countCharacters(str) 
{

    let charCount = {};  // Skapa ett tomt objekt för att lagra teckenräkningen

    for (let char of str) {   // upprepning över varje tecken i strängen

        charCount[char] = (charCount[char] || 0) + 1;  // Om tecknet redan finns i objektet, öka räkningen, annars sätt räkningen till 1
    }

    return charCount;
}


let inputString = 'Lucifer hic fuit';
let result = countCharacters(inputString);
console.log(result);

//--------------------------------------------------------------------------------------------------//

console.log(users);

function filterUsersByCountry(usersList, countryCode) 
{

    const filteredUsers = usersList.filter(user => user.nat === countryCode);   // Använd filter för att få en ny lista med användare som har den givna landskoden
    
    return filteredUsers;
}

const usersWithCountryCode = filterUsersByCountry(users, 'CH');


console.log(usersWithCountryCode);


//--------------------------------------------------------------------------------------------------//


function filterUsersByGender(usersList, Gender) 
{

    const filteredUsers_ = usersList.filter(user => user.name.title === Gender);   // Använd filter för att få en ny lista med användare som har den givna title:n
    
    return filteredUsers_;
}

const usersWithGender = filterUsersByGender(users, 'Miss');

console.log(usersWithGender);

//--------------------------------------------------------------------------------------------------//

function getAllEmails(usersList) 
{

    const getUsersEmail = usersList.map(user => user.email);   // Använd filter för att få en ny lista med användare som har email
    
    return getUsersEmail;
}

const usersWithEmail = getAllEmails(users);


console.log(usersWithEmail);

//--------------------------------------------------------------------------------------------------//

function updateEmailFormat(usersList) 
{
    const updatedEmails = usersList.map(user => 
        {
        const [firstName, lastName] = user.name.last.split('-');
        const countryCode = (user.nat || 'swe').toLowerCase(); // Default landskod (swe) om nat inte finns, Hämta landskoden från användarens objekt eller använd en standardkod om den inte finns
        const newEmail = `${lastName}.${firstName}@evilcorp.${countryCode}`; // Skapa den nya e-postadressen med landskoden
        return { ...user, email: newEmail }; // uppdaterad varjant 
    });

    return updatedEmails;
}

const usersWithUpdatedEmails = updateEmailFormat(users);
console.log(usersWithUpdatedEmails);
