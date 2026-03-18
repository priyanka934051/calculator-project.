let screen = document.getElementById('screen');

// Toggle Function
function toggleScientific() {
    let panel = document.getElementById('scientific-panel');
    let arrow = document.getElementById('arrow-icon');

    if (panel.style.display === "grid") {
        panel.style.display = "none";
        arrow.innerText = "︾"; // Down arrow
    } else {
        panel.style.display = "grid";
        arrow.innerText = "︽"; // Up arrow
    }
}

function appendValue(value) {
    if (screen.value === "0") screen.value = "";
    screen.value += value;
}

function clearScreen() { screen.value = "0"; }
function backspace() { screen.value = screen.value.slice(0, -1) || "0"; }

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = "Error";
    }
}

function factorial() {
    let num = parseInt(screen.value);
    let fact = 1;
    for (let i = 1; i <= num; i++) fact *= i;
    screen.value = fact;
}