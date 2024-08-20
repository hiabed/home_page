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

const data_example = async() => {
    try {
        const data = await fetch("https://dattebayo-api.onrender.com/characters");
        if (data.ok)
        {
            const json_data = await data.json();
            return json_data.characters;
        }
    } catch (err) {
        console.error(err);
    }
}

const data_characters = async() => {
    const characters = await data_example();
    characters.forEach(character => {
        const user = document.createElement("div");
        document.querySelector("#chats").appendChild(user);
        user.innerHTML = character.name;
        // document.querySelector("#chats div").style.border = "none";
        user.addEventListener("click", ()=> {
            const users = document.querySelectorAll("#chats div");
            users.forEach(userr => {
                userr.style.width = "90%";
                userr.style.boxShadow = "0 0 5px #0e2c2e";
            })
            user.style.width = "98%";
            user.style.boxShadow = "0 0 5px #9bf9ff";
            document.querySelector("#chat-pic").style.backgroundImage  = `url("${character.images[0]}")`;
            document.querySelector("#secondd h3").innerHTML = character.name;
        })
    })
}

//  change when click on the user only.

data_characters();

