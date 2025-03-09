    let boxes = document.querySelectorAll(".box");
    let reset = document.querySelector(".reset");
    let newBtn = document.querySelector(".newbtn");

    let turnX = true;

    let winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const resetGame = () => {
      turnX = true;
      enableBoxes();
      msgContainer.classList.add("hide");
    };

    boxes.forEach((box) => {
      box.addEventListener("click", () => {
        if (turnX === true) {
          box.innerText = "X";
          turnX = false;
        } else {
          box.innerText = "O";
          turnX = true;
        }
        box.disabled = true;

        checkWinner();
      });
    });

    const disableBoxes = () => {
      for (let box of boxes) {
        box.disabled = true;
      }
    };

    const enableBoxes = () => {
      for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
      }
    };

    const showWinner = (winner) => {
      localStorage.setItem("winner", winner);
      window.location.href = "Winner.html";
    };

    const checkWinner = () => {
      for (let pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
          if (val1 === val2 && val2 === val3) {
            showWinner(val1);
          }
        }
      }
    };

    reset.addEventListener("click", resetGame);
    
// Loader
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".loader-container").style.display = "flex";
});

window.addEventListener("load", function() {
    document.querySelector(".loader-container").style.display = "none";
});