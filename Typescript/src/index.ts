console.log("hello world");
let greeting: string = "kalle";
let isGreeting: boolean = true;
let randomNumer: number = Math.ceil(Math.random() * 10);


let changing: any = "hej";
let arr: string[] = ["hej", "då"];
let names = "Oskar";

let re: RegExp = /\w+/g;

function getName(firstNama: string, lastName: string)
{
    const fullName = firstNama + " " + lastName
    return fullName;
}

const fullName: string = getName("Kalle", "Anka");
