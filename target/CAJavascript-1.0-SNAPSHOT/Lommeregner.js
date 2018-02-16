var displayList = [];
var display = document.getElementById("display");

document.getElementById("buttons").addEventListener("click", function (e) {
    var buttonValue = e.target.innerText;
    displayList.push(buttonValue);
    updateDisplay();
});

function updateDisplay() {

    display.innerHTML = displayList.join(" ");
}

document.getElementById("calculate").addEventListener("click", function (e) {

    e.stopPropagation();
    var result;
    var calculation = displayList.join("");
    if (calculation.indexOf("+") > -1) {
        var numbers = calculation.split("+");
        result = Number(numbers[0]) + Number(numbers[1]);
    }
    if (calculation.indexOf("-") > -1) {
        var numbers = calculation.split("-");
        result = Number(numbers[0]) - Number(numbers[1]);
    }
    ;
    if (calculation.indexOf("/") > -1) {
        var numbers = calculation.split("/");
        result = Number(numbers[0]) / Number(numbers[1]);
    }
    ;
    if (calculation.indexOf("*") > -1) {
        var numbers = calculation.split("*");
        result = Number(numbers[0]) * Number(numbers[1]);
    }
    ;
    display.innerHTML = result;

});


