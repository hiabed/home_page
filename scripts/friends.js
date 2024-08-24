const friendsBtn = document.querySelector("#friends");
const friendsPart = document.querySelector("#friends-part");

const friendsFunc = () => {
    main.style.display = "none";
    settingPage.style.display = "none";
    chatPage.style.display = "none";
    profileId.style.display = "none";
    rankPart.style.display = "none";
    friendsPart.style.display = "block";
}

friendsBtn.addEventListener("click", friendsFunc);