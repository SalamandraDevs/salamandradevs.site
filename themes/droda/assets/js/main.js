// CODE SECTION: greetings
const title = document.querySelector("title");
const hamButton = document.querySelector("nav button");
const aside = document.querySelector("aside");

console.log("Gracias por visitar a " + title.innerHTML);

hamButton.addEventListener("click", (e)=>{
    if(e.target.attributes[0].nodeValue === 'true'){
        e.target.attributes[0].nodeValue = false;
        aside.setAttribute("style", "display: none");
    } else {
        e.target.attributes[0].nodeValue = true;
        aside.setAttribute("style", "display: flex");
    }
});
