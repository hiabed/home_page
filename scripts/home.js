const homeButton = document.querySelector("#home");
const main = document.querySelector("#main");

const mainFunction = () => {
    profileId.style.display = "none";
    settingPage.style.display = "none";
    chatPage.style.display = "none";
    rankPart.style.display = "none";
    friendsPart.style.display = "none";
    main.style.display = "block";
    // main.style.transition = "all 1s";
    // document.querySelector("#profile-img").style.display = "block";
}

homeButton.addEventListener("click", mainFunction);