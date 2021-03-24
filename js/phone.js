
function activateScreen() {
    var o = document.getElementById("scree");
    if (o === document.getElementById("screen")) {
        document.getElementById("screen-on").style.display = "block"
    }

}

function turnOn() {
    document.getElementById("screen-on").style.display = "block";
    document.getElementById("screen").style.display = "none";

}



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


    var d = new Date();
    var options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };

    var date2 = date.toLocaleDateString("default", options);





    document.getElementById("date").innerText = date2;
    document.getElementById("date").textContent = date2;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    document.getElementById("screen-on").style.display = "block";
    document.getElementById("white-bar").style.display = "block";
    document.getElementById("clock").style.display = "block";
    document.getElementById("date").style.display = "block"
}


function showPasscode() {
    document.getElementById("clock").style.display = "none";
    document.getElementById("date").style.display = "none"
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
    // var dater = new Date();
    // var h = date.getHours();
    // var m = date.getMinutes();


    // if (h > 24) {
    //     h = h - 24;

    //  }

    //  h = (h < 10) ? "0" + h : h;
    //  m = (m < 10) ? "0" + m : m;


    //  var timer = h + ":" + m;
    // document.getElementById("miniClock").innerText = timer;
    // document.getElementById("miniClock").textContent = timer;
    document.getElementById("miniclock").style.display = "block"
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
    document.getElementById("app1").style.display = "block";
    document.getElementById("app2").style.display = "block";
    document.getElementById("app3").style.display = "block";
    document.getElementById("app4").style.display = "block";
    document.getElementById("white-bar").style.display = "none";
    document.getElementById("white-bar2").style.display = "none";

    
}



function calculator() {


document.getElementById("app1").style.display = "none";
document.getElementById("app2").style.display = "none";
document.getElementById("app3").style.display = "none";
document.getElementById("app4").style.display = "none";
document.getElementById("login").style.display = "none";
document.getElementById("white-bar2").style.display = "block";

document.getElementsByClassName("calculator")[0].style.display = "block"
document.getElementsByClassName("input").style.display = "block"
document.getElementsByClassName("pluss").style.display = "block"
document.getElementsByClassName("minus").style.display = "block"
document.getElementsByClassName("multiply").style.display = "block"
document.getElementsByClassName("dot").style.display = "block"
document.getElementById("null").style.display = "block"
document.getElementById("plussminus").style.display = "block"
document.getElementById("prosent").style.display = "block"
document.getElementsByClassName("operators").style.display = "block"
document.getElementsByClassName("numbers").style.display = "block"
document.getElementsByClassName("equal").style.display = "block"
document.getElementById("clear").style.display = "block"




    var input = document.getElementById("input"),
    number = document.querySelectorAll(".numbers div"),
    operator = document.querySelectorAll(".operators div"),
    result = document.getElementById("result"),
    clear = document.getElementById("clear"),
    resultDisplayed = false;

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (e) {
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        if (resultDisplayed === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (
            (resultDisplayed === true && lastChar === "+") ||
            lastChar === "-" ||
            lastChar === "×" ||
            lastChar === "÷"
        ) {
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } else {
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }
    });
}

for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function (e) {
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        if (
            lastChar === "+" ||
            lastChar === "-" ||
            lastChar === "×" ||
            lastChar === "÷"
        ) {
            var newString =
                currentString.substring(0, currentString.length - 1) +
                e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0) {
            console.log("enter a number first");
        } else {
            input.innerHTML += e.target.innerHTML;
        }
    });
}

result.addEventListener("click", function () {
    var inputString = input.innerHTML;

    var numbers = inputString.split(/\+|\-|\×|\÷/g);


    var operators = inputString.replace(/[0-9]|\./g, "").split("");

    console.log(inputString);
    console.log(operators);
    console.log(numbers);
    console.log("----------------------------");



    var divide = operators.indexOf("÷");
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
    }

    var multiply = operators.indexOf("×");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }

    var subtract = operators.indexOf("-");
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }

    var add = operators.indexOf("+");
    while (add != -1) {

        numbers.splice(
            add,
            2,
            parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
        );
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }

    input.innerHTML = numbers[0];

    resultDisplayed = true;
});


clear.addEventListener("click", function () {
    input.innerHTML = "";
});
}