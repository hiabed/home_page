const chatButton = document.querySelector("#chat");
const chatPage = document.querySelector("#chat-part");

const chatFunction = () => {
    profileId.style.display = "none";
    main.style.display = "none";
    settingPage.style.display = "none";
    chatPage.style.display = "block";
    
    console.log("test mic..");
}

chatButton.addEventListener("click", chatFunction);