const link = document.querySelectorAll("a");
const profileButton = document.querySelector("#profile");
const main = document.querySelector("#main");
const profileId = document.querySelector("#profile-part");
// const games = document.querySelector("#games");

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

function profile(event)
{
    event.preventDefault();
    main.style.display = "none";
    profileId.style.display = "block";
    console.log("test profile..");
}

profileButton.addEventListener("click", profile);

function mainFunction()
{
    // console.log("test mic..");
    main.style.display = "block";
    profileId.style.display = "none";
}

profileButton.addEventListener("click", mainFunction);
