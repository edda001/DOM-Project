//variables 
let btn = document.getElementById("new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    {
        quote: "The purpose of our lives is to be happy",
        person: "Dalai Lama"
    },
    {
        quote: "Life is what happens when you're busy making other plans",
        person: "John Lennon"
    },
    {
        quote: "Get busy living or get busy dying",
        person: " Stephen King"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        person: "Mae West"
    },
    {
        quote: "Money and success dont change people; they merely amplify what is already there",
        person: "Will Smith"
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        person: "Babe Ruth"
    }
];


    function change() {
        let random = Math.floor(Math.random() * quotes.length);
        quote.innerText = quotes[random].quote;
        person.innerText = quotes[random].person;
      }

