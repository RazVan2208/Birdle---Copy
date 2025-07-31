import {list_of_birds} from /birds/list_of_birds.js;

const num_of_guesses = 6;
let guesses_remaining = num_of_guesses;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = list_of_birds[Math.floor(Math.random() * WORDS.length)]

function createGameBoard() {
    const gameBoard = document.getElementById("game-board");
    for (let i = 0; i < num_of_guesses; i++) {
        let row = document.createElement("div");
        row.className = "letter-row";
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div");
            box.className = "letter-box";
            row.appendChild(box);
        }
        gameBoard.appendChild(row);
    }
}

