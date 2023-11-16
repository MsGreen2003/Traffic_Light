let intervalId = null;

document.getElementById("startButton").onclick = startTrafficLight;
document.getElementById("stopButton").onclick = stopTrafficLight;

function startTrafficLight() {
    intervalId = setInterval(changeLight, 500);
}

function stopTrafficLight() {
    clearInterval(intervalId);
    clearLights();
}

function changeLight() {
    if (document.getElementById('stopLight').style.backgroundColor === "red") {
        illuminateYellow();
    } else if (document.getElementById('slowLight').style.backgroundColor === "yellow") {
        illuminateGreen();
    } else {
        illuminateRed();
    }
}

function illuminateRed() {
    clearLights();
    document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateYellow() {
    clearLights();
    document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function illuminateGreen() {
    clearLights();
    document.getElementById('goLight').style.backgroundColor = "green";
}

function clearLights() {
    document.getElementById('stopLight').style.backgroundColor = "black";
    document.getElementById('slowLight').style.backgroundColor = "black";
    document.getElementById('goLight').style.backgroundColor = "black";
}