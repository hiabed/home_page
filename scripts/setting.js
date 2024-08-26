const settingButton = document.querySelector("#setting");
const settingPage = document.querySelector("#setting-part");

const settingFunction = () => {
    profileId.style.display = "none";
    main.style.display = "none";
    chatPage.style.display = "none";
    rankPart.style.display = "none";
    friendsPart.style.display = "none";
    settingPage.style.display = "block";
    // document.querySelector("#profile-img").style.display = "block";
    // console.log("test mic..");
}

settingButton.addEventListener("click", settingFunction);

// nav manipulation style.
const settingNavBtn = document.querySelectorAll(".setting-nav-btn");
settingNavBtn[0].classList.add('styled-nav-btn');

settingNavBtn.forEach ((frdNavBtn)=> {
    frdNavBtn.addEventListener("click", (event)=> {
        settingNavBtn.forEach (frdNavBtn => {frdNavBtn.classList.remove('styled-nav-btn')});
        frdNavBtn.classList.add('styled-nav-btn');
    })
});

const profileSetting = document.querySelector("#profile-setting");
const themes = document.querySelector("#themes");
const options = document.querySelector("#options");

settingNavBtn[0].addEventListener("click", (event)=> {
    profileSetting.style.display = "flex";
    options.style.display = "none";
    themes.style.display = "none";
})

settingNavBtn[1].addEventListener("click", ()=> {
    profileSetting.style.display = "none";
    options.style.display = "none";
    themes.style.display = "flex";
})

settingNavBtn[2].addEventListener("click", ()=> {
    profileSetting.style.display = "none";
    options.style.display = "flex";
    themes.style.display = "none";
})