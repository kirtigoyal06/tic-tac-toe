const cells = document.querySelectorAll(".cell");
let currPlayer = "X";
let gameover = false;
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function check() {
    win.forEach((pattern) => {
        let a = pattern[0];
        let b = pattern[1];
        let c = pattern[2];
        if (cells[a].textContent !== "" && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            document.querySelector("#msg").textContent = cells[a].textContent + " wins!";
            gameover = true;
            return;
        }
    })
    let draw = true;
    cells.forEach((cell) => {
        if (cell.textContent == "") {
            draw = false;
        }
    })
    if (draw && !gameover) {
        document.querySelector("#msg").textContent = "Draw";
        gameover = true;
        return;
    }
}
cells.forEach((cell) => {

    cell.addEventListener("click", () => {

        if (cell.textContent !== "" || gameover) {
            return;
        }

        cell.textContent = currPlayer;

        check();
        if (!gameover)
        {
            currPlayer = currPlayer === "X" ? "O" : "X";
            document.getElementById("msg").textContent="Player "+currPlayer+"'s turn";
        }

    });

});
const restart = document.getElementById("btn");
restart.addEventListener("click", () => {
    cells.forEach((cell) => {
        cell.textContent = "";
    })
    currPlayer = "X";
    gameover = false;
    document.getElementById("msg").textContent = "Player X's turn";
})


