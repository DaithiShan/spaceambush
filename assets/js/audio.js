let audio = {
    gameActive: false,
    gameOverAudio: new Audio("assets/audio/game-over.wav"),
    clickAudio: new Audio("assets/audio/laser.mp3"),
    gameMusic: document.getElementById("game-music"),
    gameMenuMusic: new Audio("assets/audio/menu-music.mp3"),
    isSoundMuted: false,
    isMusicMuted: false,
    isMenuMusic: false,
    soundButton: document.getElementById("sound-button"),
    musicButton: document.getElementById("music-button"),
    musicVolumeSlider: document.getElementById("mVolume-slider"),
    soundVolumeSlider: document.getElementById("sVolume-slider"),
};

// This sets default volume for all audio/music on page load

function defaultVolume() {
    audio.gameMusic.volume = audio.musicVolumeSlider.defaultValue / 100;
    audio.clickAudio.volume = audio.soundVolumeSlider.defaultValue / 100;
    audio.gameOverAudio.volume = audio.soundVolumeSlider.defaultValue / 100;
}

// Below listener records the users choice for music value. If volume is set to 0. Music is paused.

audio.musicVolumeSlider.addEventListener("change", event => {
    audio.gameMusic.volume = audio.musicVolumeSlider.value / 100;
    if (audio.gameMusic.volume === 0) {
        stopMenuMusic();
    } else {
        playMenuMusic();
        audio.isMenuMusic = true;
    }
});

/**
 * Below function is tied to utils event listener. If user presses the button, the variable
 * isMusicMuted will change to the opposite boolean value. This is used to determine
 * whether music will play. 
 */

function musicController() {
    if (audio.isMusicMuted === true) {
        audio.isMusicMuted = false;
        audio.musicButton.innerHTML = "<i class='fas fa-volume-up'></i>";
        playMenuMusic();
        audio.isMenuMusic = true;
    } else if (audio.isMusicMuted === false) {
        audio.isMusicMuted = true;
        audio.musicButton.innerHTML = "<i class='fas fa-volume-mute'></i>";
        stopMenuMusic();
    }
}

//The below determines if the game is active, if the game is not active.

// function isGameActive() {
//     if (app.difficultyLevel !== "") {
//         audio.gameActive = true;
//     } else {
//         audio.gameActive = false;
//     }
// }

//The below function will play music as long as the conditions are met.

function playMusic() {
    if (audio.isMusicMuted !== true) {
        audio.gameMusic.play();
        audio.gameMusic.loop = true;
    }
}

function playMenuMusic() {
    if (audio.isMusicMuted !== true) {
        audio.gameMenuMusic.play();
        audio.gameMenuMusic.loop = true;
    }
}

//Function to "stop" music and reset to 0.

function stopMusic() {
    audio.gameMusic.pause();
    audio.gameMusic.currentTime = 0;
}

function stopMenuMusic() {
    audio.gameMenuMusic.pause();
    audio.gameMenuMusic.currentTime = 0;
}

/** 
 * Below listener records the users choice for sound effects volume.
 */

audio.soundVolumeSlider.addEventListener("change", event => {
    audio.clickAudio.volume = audio.soundVolumeSlider.value / 100;
    audio.gameOverAudio.volume = audio.soundVolumeSlider.value / 100;
    clickSound();

    if (audio.soundVolumeSlider.value == 0) {
        audio.gameOverAudio.volume = 0;
    } else if (audio.soundVolumeSlider.value > 0 && audio.soundVolumeSlider.value <= 20) {
        audio.gameOverAudio.volume = audio.soundVolumeSlider.value / 100;
    }
});

/**
 * Function is tied to utils event listener. If user presses the button, the variable
 * isSoundMuted will change to the opposite boolean value. This is used to determine
 * whether sound will play. 
 */

function soundEffectController() {
    if (audio.isSoundMuted === true) {
        audio.isSoundMuted = false;
        audio.soundButton.innerHTML = "<i class='fas fa-volume-up'></i>";
        clickSound();
    } else if (audio.isSoundMuted === false) {
        audio.isSoundMuted = true;
        audio.soundButton.innerHTML = "<i class='fas fa-volume-mute'></i>";
    }
}

// Function plays a click sound when buttons are pressed.

function clickSound() {
    if (audio.isSoundMuted === false) {
        audio.clickAudio.play();
    }
}

// Toggles both Music and Sound together

function toggleAudio() {
    if(audio.isSoundMuted === false && audio.isMusicMuted === false)
    {
        audio.isSoundMuted = true;
        audio.isMusicMuted = true;
        audio.gameMusic.pause();
        audio.gameMusic.currentTime = 0;
        audio.clickAudio.pause();
        gameAudioButton.innerHTML = "<i class='fas fa-volume-mute'></i>";
    } else if(audio.isSoundMuted === false) {
        audio.isSoundMuted = true;
        audio.clickAudio.pause();
        gameAudioButton.innerHTML = "<i class='fas fa-volume-mute'></i>";
    } else if(audio.isMusicMuted === false) {
        audio.isMusicMuted = true;
        audio.gameMusic.pause();
        gameAudioButton.innerHTML = "<i class='fas fa-volume-mute'></i>";
    } else {
        audio.isSoundMuted = false;
        audio.isMusicMuted = false;
        audio.clickAudio.play();
        audio.gameMusic.play();
        audio.gameMusic.loop = true;
        gameAudioButton.innerHTML = "<i class='fas fa-volume-up'></i>"
    }
}

// Function plays a victory sound on game completion.

function gameOverEffect() {
    stopMusic();
    if (audio.isSoundMuted === false) {
        audio.gameOverAudio.play();
    }
}