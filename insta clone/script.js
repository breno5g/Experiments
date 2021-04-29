let index = 1;

function load() {
    changeImage();
}

function changeImage () {
    setInterval(() => {
        document.querySelector(".phone").children[index].classList.remove("animate");    
        if (index < 5) {
            index++;
        } else {
            index = 1
        }
        document.querySelector('.phone').children[index].classList.add('animate')
    }, 5000)
    
}

window.document.addEventListener("load", load())