        document.getElementById("finalScore").textContent = localStorage.getItem("finalScore") || 0;
          document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".loader-container").style.display = "flex";
});
  window.addEventListener("load", function() {
    setTimeout(() => {
        document.querySelector(".loader-container").style.display = "none";
    }, 1000);
});