const profileButton = document.querySelector("#profile");
const profileId = document.querySelector("#profile-part");

const profile = () => {
    main.style.display = "none";
    settingPage.style.display = "none";
    chatPage.style.display = "none";
    profileId.style.display = "block";
    // console.log("test profile..");
}

profileButton.addEventListener("click", profile);