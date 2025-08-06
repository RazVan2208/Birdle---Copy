import list_of_birds from '../birds/list_of_birds.js';

const num_of_guesses = 6;
const displayGuess = document.getElementById("showGuess");
let guessAmt = 0;
let guessArray = [];
let guesses_remaining = num_of_guesses;
let currentGuess = "";
let rightGuessString = list_of_birds[Math.floor(Math.random() * list_of_birds.length)];
console.log(rightGuessString);

let userGuess;
document.getElementById("mySubmit").onclick = function(){
    guessAmt +=1;
    console.log(guessAmt);
    if(guessAmt <= num_of_guesses){
    userGuess = document.getElementById("myGuess").value;
    console.log(userGuess);
    currentGuess = userGuess;
    displayGuess.textContent = currentGuess;
    guessArray.push(currentGuess);
    } else{ 
        mySubmit.disabled = true;
        displayGuess.textContent = "You have no more guesses left!";
        console.log(guessArray);
        createTable(guessArray);
        return;
    }
    
}

function updateResultBoard(currentGuess){
    
    for(let i = 0; i < num_of_guesses; i+=1){

    }
}

function createTable(table){
    let storageTable = document.getElementById("resultStorageTable");
    let guessRows = 2;
    let columns = guessArray.length;
    for(let i = 0; i < guessRows; i +=1) {
        let row = storageTable.insertRow();
        for(let j = 0; j < columns; j+=1){
            row.insertCell().textContent = guessArray[i];
        }
    }
}
