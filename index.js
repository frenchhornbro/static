const title = document.getElementById("title");
const background = document.getElementById("titleContainer");
setInterval(() => {
    title.style.color = Math.floor(Math.random() * 0xFFFFFF).toString(16);
    background.style.backgroundColor = Math.floor(Math.random() * 0xFFFFFF).toString(16);
}, 800)