import list_of_birds from '../birds/list_of_birds.js';

const num_of_guesses = 6;
const displayGuess = document.getElementById("showGuess");
let guessAmt = 0;
let guessArray = [];
let guesses_remaining = num_of_guesses;
let currentGuess = "";
let rightGuessString = list_of_birds[Math.floor(Math.random() * list_of_birds.length)];
var reset = false;
console.log(rightGuessString);

let userGuess;

let game = initGame();
document.getElementById("myReset").addEventListener("click", function(){
    reset = true;
    game.resetGame();
    displayGuess.textContent = "Game Reset! Keep going!";
});
game.intakeGuesses();


if(reset === true){
console.log(guessArray);
}

function initGame() {

    var div = document.querySelector(".answer-box");
    var frag = document.createDocumentFragment();
    var select = document.getElementById("myGuess");
    for(let i = 0; i < list_of_birds.length; i++){
        select.options.add(new Option(list_of_birds[i]), i.textContent);
    }
    frag.appendChild(select);
    div.appendChild(frag);
    div.insertBefore(select, document.getElementById("mySubmit"));

    function intakeGuesses(){
        document.getElementById("mySubmit").addEventListener("click", function() {
        guessAmt += 1;
        console.log(guessAmt);
        if (guessAmt <= num_of_guesses && checkGuess(userGuess) === false) {
            userGuess = select.value;
            console.log(userGuess);
            currentGuess = userGuess;
            displayGuess.textContent = currentGuess;
            guessArray.push(currentGuess);
            createTable(guessArray);
        } else if(guessAmt >= num_of_guesses && checkGuess(userGuess) === false) {
            document.getElementById("mySubmit").disabled = true;
            createTable(guessArray);
            displayGuess.textContent = "You have no more guesses left! Game Restarting";
            resetGame();
            console.log(guessArray);
            
        } else if(checkGuess(userGuess) === true){
            displayGuess.textContent = "You guessed it right! The bird was indeed " + rightGuessString + "! Game Restarting";
            resetGame();
            createTable(guessArray);
        }
    });
    return guessArray, guessAmt;
    }

    function resetGame(){

        guessAmt = 0;
        guessArray = [];
        clearTable();
        document.getElementById("mySubmit").disabled = false;
        rightGuessString = list_of_birds[Math.floor(Math.random() * list_of_birds.length)];
        console.log(rightGuessString);
        reset = false;

    }

    return {intakeGuesses, resetGame};
}

function checkGuess(guess) {
    if (guess === rightGuessString) {
        console.log("You guessed it right!");
        return true;
    } else {
        console.log("Try again!");
        return false;
    }
}

function createTable(){
    let storageTable = document.getElementById("resultStorageTable");
    storageTable.innerHTML = ""; // Clear previous table

    let columns = 6;

    let headerRow = storageTable.insertRow();
    for (let i = 0; i < columns; i++) {
        let cell = headerRow.insertCell();
        cell.textContent = "Guess " + (i + 1);
    }

    let guessRow = storageTable.insertRow();
    for (let i = 0; i < columns; i++) {
        let cell = guessRow.insertCell();
        cell.textContent = guessArray[i] || "";
    }


    
}

function clearTable(){
    let storageTable = document.getElementById("resultStorageTable");
    storageTable.innerHTML = ""; // Clear previous table
    return storageTable;
}
