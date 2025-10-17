function updateTime() {
    const timeEI =
    document.getElementById("currentTime");
    timeEI.textContent = Date.now();
}

updateTime();

setInterval(updateTime, 1000);