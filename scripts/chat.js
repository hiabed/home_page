const chatButton = document.querySelector("#chat");
const chatPage = document.querySelector("#chat-part");

const chatFunction = () => {
    profileId.style.display = "none";
    main.style.display = "none";
    settingPage.style.display = "none";
    chatPage.style.display = "block";
    // document.querySelector("#profile-img").style.display = "block";
}

chatButton.addEventListener("click", chatFunction);