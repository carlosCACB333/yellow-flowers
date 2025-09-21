onload = () => {
    document.body.classList.remove("container");

    const audioButton = document.getElementById("audio-button");
    let isFirstClick = true;

    audioButton.addEventListener("click", () => {

        const audio = document.getElementById("audio-background");

        if (audio.paused) {
            audio.play();
            audioButton.classList.add("playing");

            if (isFirstClick) {
                audio.currentTime = 170;
                isFirstClick = false;
            }
        } else {
            audio.pause();
            audioButton.classList.remove("playing");
        }
    });
};


