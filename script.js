// let username = '';
// let defaultName = username || 'Stranger';
// console.log(defaultName); // Prints: Stranger

const links = document.querySelectorAll(".nav-button");
links[0].classList.add('link');

links.forEach ((link)=> {
    link.addEventListener("click", (event)=> {
        links.forEach (link => {link.classList.remove('link')});
        // event.preventDefault();
        link.classList.add('link');
    })
});

const loginBtn = document.querySelector(".login-btn");
const loginPart = document.querySelector("#login-parent");
const navBar = document.querySelector("#nav");
const mainPart = document.querySelector("#main");
const profilePart = document.querySelector("#profile-part");
const chatPart = document.querySelector("#chat-part");
const setting = document.querySelector("#setting-part");

loginBtn.addEventListener("click", ()=> {
    navBar.style.display = "block";
    mainPart.style.display = "block";
    loginPart.style.display = "none";
})

const logoutBtn = document.querySelector("#logout");

logoutBtn.addEventListener("click", ()=> {
    setting.style.display = "none";
    chatPart.style.display = "none";
    profilePart.style.display = "none";
    navBar.style.display = "none";
    mainPart.style.display = "none";
    loginPart.style.display = "flex";
})