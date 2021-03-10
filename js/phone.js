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

function activateScreen(){
    document.getElementById("screen-on").style.display = "block";
    document.getElementById("screen").style.display = "none";
}

function showPasscode(){
    document.getElementById("password-screen").style.display = "block";
    document.getElementById("sircle").style.display = "block";
}

function turnOn(){
    document.getElementById("screen-on").style.display = "block";
    document.getElementById("screen").style.display = "none";
}


