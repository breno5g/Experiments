let audio = document.getElementById("audio")

function playPause() {
    let btn = event.target
    if (audio.classList.contains("playing") == true) {
        audio.pause();
        audio.classList.remove("playing");
        btn.setAttribute("src", "assets/icons/icons8-circled-play-50.png")
    } else {
        audio.play();
        audio.classList.add("playing");
        btn.setAttribute("src", "assets/icons/icons8-pause-button-50.png")
    }
}

function goBackward() {
    audio.currentTime -= 15;
}
function goForward() {
    audio.currentTime += 15;
}

function turnUp() {
    if (audio.volume >= 0 && audio.volume < 1) {
        audio.volume += 0.1;
    }
}

function turnDown() {
    if (audio.volume <= 1 && audio.volume > 0) {
        audio.volume -= 0.1;
    }
}

let teste = document.querySelector(".currentTimeBar");


// setInterval(() => {
//     teste.style = `width: ${parseInt(audio.duration) / 100}px`
// }, 50)

// setInterval(() => {
//     console.log(parseInt(audio.duration / 100))
// }, 1500)