const homeButton = document.querySelector("#home");
const main = document.querySelector("#main");

const mainFunction = () => {
    profileId.style.display = "none";
    settingPage.style.display = "none";
    chatPage.style.display = "none";
    main.style.display = "block";
    main.style.transition = "all 1s";
}

homeButton.addEventListener("click", mainFunction);