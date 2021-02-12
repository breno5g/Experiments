let audio = document.getElementById("audio");
let progressBar = document.querySelector(".currentTimeBar");
let volumeBar = document.getElementById("volumeBar");
let fillVol = document.getElementById("volFill");
let currentTime = 0;
let actualVol;
let actualVolFill;
let playInterval;

audio.volume = 0.5;
fillVol.style = `width: ${volumeBar.value - 5}%;`

/* =-=-=-=-= Songs =-=-=-=-= */
let songs = ["Death of a bachelor", "Binks no sake", "The one dragonborn"]
let actualSong = 0;

/* =-=-=-=-= Play & Pause =-=-=-=-= */
function playPause() {
    let btn = event.target;
    if (audio.classList.contains("playing") == true) {
        audio.pause();
        audio.classList.remove("playing");
        btn.setAttribute("src", "assets/icons/icons8-play-100.png")
        playBar()
    } else {
        audio.play();
        audio.classList.add("playing");
        btn.setAttribute("src", "assets/icons/icons8-pause-100.png")
        playBar()
    }
}

/* =-=-=-=-= Music change =-=-=-=-= */
function next() {
    if (actualSong != songs.length - 1) {
        audio.setAttribute("src", `assets/musics/${songs[actualSong + 1]}.mp3`)
        actualSong++;
    } else {
        audio.setAttribute("src", `assets/musics/${songs[0]}.mp3`)
    }
    resetInterface()
}

/* =-=-=-=-= Reset interface =-=-=-=-= */
function resetInterface() {
    let fill = document.getElementById("timeFill");
    progressBar.value = 0;
    fill.style = `width: ${0}%;`;
    audio.currentTime = 0;
    audio.play();
}

/* =-=-=-=-= Mute buttom =-=-=-=-= */
function mute() {
    let btn = document.getElementById("vol")
    let vol = document.getElementById("actualVol");
    if (btn.classList.contains("active")) {
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>'
        btn.classList.remove("active");
        audio.volume = 0.5;
        volumeBar.value = actualVolFill;
        fillVol.style = `width: ${50}%`
        vol.innerText = volumeBar.value;
        
    } else {
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>'
        btn.classList.add("active");
        volumeBar.value = actualVolFill;
        audio.volume = 0;
        volumeBar.value = 0;
        vol.innerText = volumeBar.value;
        fillVol.style = `width: 0`
    }
    // console.log(volumeBar.value)
}

/* =-=-=-=-= Volume bar =-=-=-=-= */
function changeVol() {
    let vol = document.getElementById("actualVol");
    let fill = document.getElementById("volFill");
    fill.style = `width: ${volumeBar.value - 5}%;`;
    audio.volume = volumeBar.value * 0.01;
    vol.innerText = volumeBar.value;
}

/* =-=-=-=-= Time bar =-=-=-=-= */
function playBar() {
    let fill = document.getElementById("timeFill");
    if (audio.classList.contains("playing") == true) {
        playInterval = setInterval(() => {
            progressBar.value = currentTime; 
            currentTime++
            // console.log(progressBar.value)
            fill.style = `width: ${progressBar.value - 1}%;`;
        }, (audio.duration / 100) * 1000)
    } else {
        clearInterval(playInterval)
    }
}

function setTime() {
    let fill = document.getElementById("timeFill");
    audio.currentTime = progressBar.value * (audio.duration / 100);
    currentTime = parseInt(progressBar.value);
    fill.style = `width: ${progressBar.value - 1}%;`;
}