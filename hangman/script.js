// script.js

const words = ['titanic', 'avatar', 'inception'];
const hints = [
    'A famous shipwreck love story',
    'Science fiction film by James Cameron',
    'A dream within a dream concept'
];

let selectedWord = words[Math.floor(Math.random() * words.length)];
let hintIndex = words.indexOf(selectedWord);
let lives = 10;
let correctGuesses = [];
let wrongGuesses = [];

function setupButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
        <button
            class="letter"
            id='` + letter + `'
            onClick="handleGuess('` + letter + `')"
        >
            ` + letter + `
        </button>
        `).join('');

    document.getElementById('alphabet').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
    if (selectedWord.includes(chosenLetter)) {
        correctGuesses.push(chosenLetter);
    } else {
        lives--;
        wrongGuesses.push(chosenLetter);
        document.getElementById('mylives').textContent = lives;
    }
    updateGameState();
}

function updateGameState() {
    let wordDisplay = selectedWord.split('').map(letter => 
        (correctGuesses.includes(letter) ? letter : "_")).join('');

    document.getElementById('hold').textContent = wordDisplay;

    if (!wordDisplay.includes('_')) {
        alert('The Gamemaker Ilija congratulates you on your triumph!');
        resetGame();
    }

    if (lives <= 0) {
        alert('The Gamemaker Ilija is disapointed with your performance! The word was ' + selectedWord);
        resetGame();
    }
}

function showHint() {
    document.getElementById('clue').innerHTML = 'Clue - ' + hints[hintIndex];
}

function resetGame() {
    correctGuesses = [];
    wrongGuesses = [];
    selectedWord = words[Math.floor(Math.random() * words.length)];
    hintIndex = words.indexOf(selectedWord);
    lives = 10;
    document.getElementById('mylives').textContent = lives;
    document.getElementById('clue').innerHTML = 'Clue -';
    setupButtons();
    updateGameState();
}

document.getElementById('hint').addEventListener('click', showHint);
document.getElementById('reset').addEventListener('click', resetGame);

setupButtons();
updateGameState();
