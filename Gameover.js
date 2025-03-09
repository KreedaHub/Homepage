        document.getElementById("finalScore").textContent = localStorage.getItem("finalScore") || 0;
// Loader
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".loader-container").style.display = "flex";
});

window.addEventListener("load", function() {
    document.querySelector(".loader-container").style.display = "none";
});