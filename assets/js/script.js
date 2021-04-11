/* Base functionality influenced by Frank's Labratory tutorial: https://youtu.be/RTb8icFiSfk */

// Global Variables
const mainPlayButton = document.querySelector("#main-play-button")

const plants  = document.querySelectorAll(".plant");
const alienOnes = document.querySelectorAll(".alien-one");
const scoreDisplay = document.querySelector("#score");
const highScoreDisplay = document.querySelector("#high-score");
const timerDisplay = document.querySelector("#timer");
const gamePlayButton = document.querySelector(".game-play-button")

let lastPlant;
let timeUp = false;
let timeLimit = 30000;
let score = 0;
let highScore = localStorage.getItem("gameHighScore")||0;
let timer;

// In-Game Functions

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

function pickRandomPlant(plants) {
    const randomPlant = Math.floor(Math.random() * plants.length);
    const plant = plants[randomPlant];
    if (plant === lastPlant) {
        return pickRandomPlant(plants);
    }

    lastPlant = plant;
    return plant;
}

function ambush() {
    const popOutTime = randomTime(1400, 700);
    const plant = pickRandomPlant(plants);
    plant.classList.add("up");
    setTimeout(() => {
        plant.classList.remove("up");
        if(!timeUp) { 
            ambush();
        }
    }, popOutTime)
}

function alienAttack() {

}

function whackAlien(e) {
    // whackSound();
    score ++;
    this.style.backgroundImage = "url(../assets/images/game-assets/alien-one-yellow.svg)";
    this.style.pointerEvent = "none";
  setTimeout(() => {
    this.style.backgroundImage = "url(../assets/images/game-assets/alien-one.svg)";
    this.style.pointerEvent = "all";
  }, 800);
  scoreDisplay.textContent = score;
}

function playGame() {
    timer = timeLimit/1000;
    score = 0;
    scoreDisplay.textContent = 0;
    highScoreDisplay.textContent = "High Score: " + highScore;
    timerDisplay.textContent = timer;
    timeUp = false;
    ambush();
    setTimeout(()=>{
        timeUp = true;
    }, timeLimit)

    let startTimer = setInterval(()=>{
        timer -= 1;
        timerDisplay.textContent = timer;
        if (timer < 0) {
            timer = 0;
            clearInterval(startTimer);
            checkHighScore();
            timerDisplay.textContent = "Time's Up!"
        }
    }, 1000);
}

function checkHighScore() {
    if(score > localStorage.getItem("gameHighScore")) {
        localStorage.setItem("gameHighScore", score);
        highScore = score;
        highScoreDisplay.textContent = "High Score: " + highScore;
    }
}



// Menu Functions
// Basic functionality inspired by Andy Osbourne : https://github.com/Andy-Osborne/Dwarf-Match/
function launchGame() {
    clickSound();
    document.getElementById("main-menu").classList.remove("d-block");
    document.getElementById("main-menu").classList.add("d-none");
    document.getElementById("donate-container").classList.remove("d-block");
    document.getElementById("donate-container").classList.add("d-none");
    document.getElementById("game-container").classList.remove("d-none");
    document.getElementById("game-container").classList.add("d-block");

}






// Event Listeners
mainPlayButton.addEventListener("click",)
gamePlayButton.addEventListener("click", playGame);
alienOnes.forEach(alienOne => alienOne.addEventListener("click", whackAlien));