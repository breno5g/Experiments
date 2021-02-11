let audio = document.getElementById("audio")

function playPause() {
    let btn = event.target
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

let valor = 0;

let n;
function playBar() {
    if (audio.classList.contains("playing") == true) {
        n = setInterval(() => {
            teste.value = valor; 
            valor++
            console.log(teste.value)
        }, 2120)
    } else {
        clearInterval(n)
    }
}

function setTime() {
    audio.currentTime = teste.value * (audio.duration / 100);
    valor = parseInt(teste.value);
    console.log(teste.value)
}

// setInterval(() => {
//     console.log(parseInt(audio.duration / 100))
// }, 1500) 