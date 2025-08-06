const playButton = document.getElementById("playButton");
const rulesButton = document.getElementById("rulesButton");
const aboutButton = document.getElementById("aboutButton");

playButton.onclick = function(){
    window.location.href = "gamepage.html";
}

rulesButton.onclick = function(){
    window.alert("STILL WORKING ON THIS, imagine clicking a non-functional button... couldnt be me");
}

aboutButton.onclick = function(){
    window.alert("um, why'd you click this?");
}