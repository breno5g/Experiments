const interval = setInterval(() => {
    const header = document.querySelector("._1QUKR")
    if (header) {
        console.log(header)
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = "2x"
        button.classList.add("twoTimesButton")

        button.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio")
            for (const audio of audios) {
                if (audio.playbackRate == 1) {
                    audio.playbackRate = 2
                    button.classList.add("clicked")
                } else {
                    audio.playbackRate = 1
                    button.classList.remove("clicked")
                }
            }
        })

        header.appendChild(button)
    }
}, 1000)