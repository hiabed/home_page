const link = document.querySelectorAll("a");
const profileButton = document.querySelector("#profile");
const profileId = document.querySelector("#profile-part");
const homeButton = document.querySelector("#home");
const main = document.querySelector("#main");
const settingButton = document.querySelector("#setting");
const settingPage = document.querySelector("#setting-part");
const chatButton = document.querySelector("#chat");
const chatPage = document.querySelector("#chat-part");

let j = 0;
if (j === 0)
{
    link[j].classList.add('link');
    j++;
}

for (let i = 0; i < link.length ;i++)
{
    link[i].addEventListener("click", (event)=>
    {
        for (let i = 0; i < link.length; i++)
            link[i].classList.remove('link');
        event.preventDefault();
        link[i].classList.add('link');
    });
};

function profile()
{
    main.style.display = "none";
    settingPage.style.display = "none";
    chatPage.style.display = "none";
    profileId.style.display = "block";
    console.log("test profile..");
}

profileButton.addEventListener("click", profile);

function mainFunction()
{
    profileId.style.display = "none";
    settingPage.style.display = "none";
    chatPage.style.display = "none";
    main.style.display = "block";
    main.style.transition = "all 1s";
    console.log("test mic..");
}

homeButton.addEventListener("click", mainFunction);

function settingFunction()
{
    profileId.style.display = "none";
    main.style.display = "none";
    chatPage.style.display = "none";
    settingPage.style.display = "block";

    console.log("test mic..");
}

settingButton.addEventListener("click", settingFunction);

function chatFunction()
{
    profileId.style.display = "none";
    main.style.display = "none";
    settingPage.style.display = "none";
    chatPage.style.display = "block";
    
    console.log("test mic..");
}

chatButton.addEventListener("click", chatFunction);
