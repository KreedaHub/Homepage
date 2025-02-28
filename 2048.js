        document.addEventListener("DOMContentLoaded", () => {
            const gridSize = 4;
            let grid, score;
            let touchStartX, touchStartY, touchEndX, touchEndY;

            function initializeGame() {
                grid = Array(gridSize).fill().map(() => Array(gridSize).fill(0));
                score = 0;
                updateScore();
                generateRandomTile();
                generateRandomTile();
                updateGrid();
            }

            function generateRandomTile() {
                let emptyTiles = [];
                for (let r = 0; r < gridSize; r++)
                    for (let c = 0; c < gridSize; c++)
                        if (grid[r][c] === 0) emptyTiles.push({ r, c });
                
                if (emptyTiles.length > 0) {
                    let { r, c } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
                    grid[r][c] = Math.random() < 0.9 ? 2 : 4;
                }
            }

            function updateGrid() {
                let gridContainer = document.getElementById("grid");
                gridContainer.innerHTML = "";
                for (let r = 0; r < gridSize; r++) {
                    for (let c = 0; c < gridSize; c++) {
                        let tile = document.createElement("div");
                        tile.className = "grid-cell";
                        if (grid[r][c] > 0) {
                            tile.textContent = grid[r][c];
                            tile.classList.add(`tile-${grid[r][c]}`);
                        }
                        gridContainer.appendChild(tile);
                    }
                }
                checkGameOver();
            }

            function slideRow(row) {
                let arr = row.filter(val => val);
                for (let i = 0; i < arr.length - 1; i++) {
                    if (arr[i] === arr[i + 1]) {
                        arr[i] *= 2;
                        score += arr[i];
                        arr[i + 1] = 0;
                    }
                }
                return arr.filter(val => val).concat(Array(gridSize).fill(0)).slice(0, gridSize);
            }

            function move(direction) {
                let moved = false;
                if (direction === "left" || direction === "right") {
                    for (let r = 0; r < gridSize; r++) {
                        let row = grid[r];
                        if (direction === "right") row.reverse();
                        let newRow = slideRow(row);
                        if (direction === "right") newRow.reverse();
                        if (grid[r].toString() !== newRow.toString()) moved = true;
                        grid[r] = newRow;
                    }
                } else {
                    for (let c = 0; c < gridSize; c++) {
                        let col = grid.map(row => row[c]);
                        if (direction === "down") col.reverse();
                        let newCol = slideRow(col);
                        if (direction === "down") newCol.reverse();
                        if (grid.map(row => row[c]).toString() !== newCol.toString()) moved = true;
                        for (let r = 0; r < gridSize; r++) grid[r][c] = newCol[r];
                    }
                }
                if (moved) {
                    generateRandomTile();
                    updateGrid();
                    updateScore();
                }
            }

            function checkGameOver() {
                if (!grid.flat().includes(0)) {
                    for (let r = 0; r < gridSize; r++)
                        for (let c = 0; c < gridSize - 1; c++)
                            if (grid[r][c] === grid[r][c + 1] || grid[c][r] === grid[c + 1][r]) return;

                    localStorage.setItem("finalScore", score);
                    window.location.href = "Gameover.html";
                }
            }

            function updateScore() {
                document.getElementById("score").textContent = score;
            }

            document.querySelector(".restart-btn").addEventListener("click", () => {
              initializeGame()
            })

            document.addEventListener("keydown", e => {
                if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
                    e.preventDefault();
                    move(e.key.replace("Arrow", "").toLowerCase());
                }
            });

            document.addEventListener("touchstart", (e) => {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            });

            document.addEventListener("touchend", (e) => {
                touchEndX = e.changedTouches[0].clientX;
                touchEndY = e.changedTouches[0].clientY;
                handleSwipe();
            });

            function handleSwipe() {
                let dx = touchEndX - touchStartX;
                let dy = touchEndY - touchStartY;
                if (Math.abs(dx) > Math.abs(dy)) {
                    if (dx > 50) move("right");
                    else if (dx < -50) move("left");
                } else {
                    if (dy > 50) move("down");
                    else if (dy < -50) move("up");
                }
            }

            initializeGame();
        });