/*function screen() { 
    var e = document.getElementById("screen");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(0, 0, 0)") {
    document.getElementById("screen").style.background = "#ffffff";
} else{
    document.getElementById("screen").style.background = "#000";
}
}
*/

function screen() {
    var e = document.getElementById("screen");
    e.classList.toggle("white-screen")
}

function offbutton() {
    var r = document.getElementsByClassName('off-on-button');
    r.classList.toggle("white-screen")
}

