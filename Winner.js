    let winner = localStorage.getItem("winner") || "No one";
    document.querySelector(".msg").innerText = `Congratulations! ${winner} is the winner!`;

    function restartGame() {
      localStorage.removeItem("winner");
      window.location.href = "Tic Tac Toe.html";
    }

    function goToHome() {
      window.location.href = "index.html";
    }
// Loader
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".loader-container").style.display = "flex";
});

window.addEventListener("load", function() {
    document.querySelector(".loader-container").style.display = "none";
});