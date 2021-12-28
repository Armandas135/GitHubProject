const container = document.querySelector(".container")
let backgroundColor = true;

container.onclick = () => {
    container.style.backgroundColor = "black";
    backgroundColor = !backgroundColor
}
