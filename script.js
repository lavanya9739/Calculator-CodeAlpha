let isDegreeMode = true; 

function clr() {
    document.getElementById("result").value = "";
}

function display(val) {
    document.getElementById("result").value += val;
}

function displayPi() {
    document.getElementById("result").value += Math.PI.toFixed(5);  
}

function displayE() {
    document.getElementById("result").value += Math.E.toFixed(5);  
}

function toggleDegree() {
    isDegreeMode = !isDegreeMode;
    document.querySelector('input[value="deg"]').value = isDegreeMode ? "deg" : "rad";
}

function erase() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
}

function equate() {
    let x = document.getElementById("result").value;
    let y;
    try {
        y = eval(x);  // Evaluates the mathematical expression
        document.getElementById("result").value = y;
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}

document.addEventListener('keydown', function(event) {
    let key = event.key;
    if (key >= '0' && key <= '9') {
        display(key);
    } else if (['+', '-', '*', '/', '(', ')', '.'].includes(key)) {
        display(key);
    } else if (key === 'Enter') {
        equate();
    } else if (key === 'Backspace') {
        erase();
    } else if (key === 'Escape') {
        clr();
    }
});
