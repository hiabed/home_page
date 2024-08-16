const settingButton = document.querySelector("#setting");
const settingPage = document.querySelector("#setting-part");

const settingFunction = () => {
    profileId.style.display = "none";
    main.style.display = "none";
    chatPage.style.display = "none";
    settingPage.style.display = "block";
    // document.querySelector("#profile-img").style.display = "block";
    // console.log("test mic..");
}

settingButton.addEventListener("click", settingFunction);