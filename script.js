// let username = '';
// let defaultName = username || 'Stranger';
// console.log(defaultName); // Prints: Stranger

const links = document.querySelectorAll("button");
links[0].classList.add('link');

links.forEach ((link)=> {
    link.addEventListener("click", (event)=> {
        links.forEach (link => {link.classList.remove('link')});
        // event.preventDefault();
        link.classList.add('link');
    })
});

