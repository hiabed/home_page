const link = document.querySelectorAll("a");

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
