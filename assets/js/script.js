/* Base functionality influenced by Frank's Labratory tutorial: https://youtu.be/RTb8icFiSfk */
const plants  = document.querySelectorAll(".plant");
const scoreDisplay = document.querySelector("#score");
const alienOnes = document.querySelectorAll(".alien-one");
const timerDisplay = document.querySelector("#timer");
const playButton = document.querySelector(".play-button")

let lastPlant;
let timeUp = false;
let timeLimit = 30000;
let score = 0;
let timer;

function randomAmbush(min, max) {
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
    const popOutTime = randomAmbush(1400, 700);
    const plant = pickRandomPlant(plants);
    plant.classList.add("up");
    setTimeout(() => {
        plant.classList.remove("up");
        if(!timeUp) { 
            ambush();
        }
    }, popOutTime)
}

function playGame() {
    timer = timeLimit/1000;
    score = 0;
    scoreDisplay.textContent = 0;
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
            timerDisplay.textContent = "Time's Up!"
            clearInterval(startTimer);
        }
    }, 1000);
}

function whackAlien(e) {
    score ++;
    this.style.backgroundImage = "url(../assets/images/game-assets/alien-one-yellow.svg)";
    this.style.pointerEvent = "none";
  setTimeout(() => {
    this.style.backgroundImage = "url(../assets/images/game-assets/alien-one.svg)";
    this.style.pointerEvent = "all";
  }, 800);
  scoreDisplay.textContent = score;
}

playButton.addEventListener("click", playGame);
alienOnes.forEach(alienOne => alienOne.addEventListener("click", whackAlien));
