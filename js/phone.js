// function activateScreen() {
//     var e = document.getElementById("screen");
//     if (e === document.getElementById("screen")) {
//         document.getElementById("screen-on").style.display = "block";
//     }
// }

// function activateScreen() {
//     var o = document.getElementById("screen-on");
//     if (o === document.getElementById("screen-on")) {
//         document.getElementById("screen").style.display = "block"
//     }

// }

function turnOn() {
    document.getElementById("screen-on").style.display = "block";
    document.getElementById("screen").style.display = "none";

}

// function activateScreen() {
//     document.getElementById("screen-on").style.display = "block";
//     document.getElementById("white-bar").style.display = "block";
// }


function activateScreenClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();

    // if (h == 0) {
    //     h = 24;
    // }

    if (h > 24) {
        h = h - 24;

    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;


    var time = h + ":" + m + " ";
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    document.getElementById("screen-on").style.display = "block";
    document.getElementById("white-bar").style.display = "block";
    document.getElementById("clock").style.display = "block";
}


function showPasscode() {
    document.getElementById("clock").style.display = "none";
    document.getElementById("password-screen").style.display = "block";
    document.getElementById("passcode-number-1").style.display = "block";
    document.getElementById("passcode-number-2").style.display = "block";
    document.getElementById("passcode-number-3").style.display = "block";
    document.getElementById("passcode-number-4").style.display = "block";
    document.getElementById("passcode-number-5").style.display = "block";
    document.getElementById("passcode-number-6").style.display = "block";
    document.getElementById("passcode-number-7").style.display = "block";
    document.getElementById("passcode-number-8").style.display = "block";
    document.getElementById("passcode-number-9").style.display = "block";
    document.getElementById("passcode-number-0").style.display = "block";
}

function logIn() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();


    if (h > 24) {
        h = h - 24;

    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;


    var time = h + ":" + m + " ";
    // document.getElementById("miniClock").innerText = time;
    //document.getElementById("miniClock").textContent = time;
    document.getElementById("login").style.display = "block";
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("passcode-number-1").style.display = "none";
    document.getElementById("passcode-number-2").style.display = "none";
    document.getElementById("passcode-number-3").style.display = "none";
    document.getElementById("passcode-number-4").style.display = "none";
    document.getElementById("passcode-number-5").style.display = "none";
    document.getElementById("passcode-number-6").style.display = "none";
    document.getElementById("passcode-number-7").style.display = "none";
    document.getElementById("passcode-number-8").style.display = "none";
    document.getElementById("passcode-number-9").style.display = "none";
    document.getElementById("passcode-number-0").style.display = "none";
    document.getElementById("miniClock").style.display = "block"
}