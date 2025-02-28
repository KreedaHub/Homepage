    let winner = localStorage.getItem("winner") || "No one";
    document.querySelector(".msg").innerText = `Congratulations! ${winner} is the winner!`;

    function restartGame() {
      localStorage.removeItem("winner");
      window.location.href = "Tic Tac Toe.html"; // Change to your game file name
    }

    function goToHome() {
      window.location.href = "index.html"; // Redirect to homepage
    }