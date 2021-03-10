function screen() { 
    var e = document.getElementById("screen");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(0, 0, 0)") {
    document.getElementById("screen").style.background = "#ffffff";
} 
}