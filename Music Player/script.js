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


function change() {
    let btn = document.getElementById("teste")
    if (btn.classList.contains("active")) {
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>'
        btn.classList.remove("active");
    } else {
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>'
        btn.classList.add("active");
    }
}