const dropdown = Array.from(document.getElementsByClassName("Box--dropdown"))[0];
const button = Array.from(document.getElementsByClassName("Box--button"))[0];
let clicks = 0; 
button.addEventListener("click", () => {
    clicks ++;
    if (clicks % 2 === 0) dropdown.style.display = "none";
    else dropdown.style.display = "flex";
});
