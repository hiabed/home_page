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

// nav manipulation style.
const frdNavBtns = document.querySelectorAll(".frd-nav-btn");
frdNavBtns[0].classList.add('styled-nav-btn');

frdNavBtns.forEach ((frdNavBtn)=> {
    frdNavBtn.addEventListener("click", (event)=> {
        frdNavBtns.forEach (frdNavBtn => {frdNavBtn.classList.remove('styled-nav-btn')});
        frdNavBtn.classList.add('styled-nav-btn');
    })
});