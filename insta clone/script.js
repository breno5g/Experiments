let image = document.querySelector(".phone").children[1];
let index = 1;

function load() {
    changeImage();
}

function changeImage () {
    setInterval(() => {
        if (index < 5) {
            index++;
        } else {
            index = 1;
        }
        setTimeout(() => {
            image.classList.add("animate")
            image.setAttribute("src", `assets/index${index}.jpg`)
        }, 2000)
        image.classList.remove("animate")
    }, 4000)
}