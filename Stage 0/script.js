document.addEventListener("DOMContentLoaded", () => {
    const timeElement = document.getElementById("currentTime");
    
    if (timeElement) {
    function updateTime() {
    timeElement.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);    

    }
});