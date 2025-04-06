let buttons = document.querySelectorAll(".game-button");
let reset = document.querySelector(".reset-button");
let newGameBtn = document.querySelector(".msg-reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide");
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("Box was clicked");
        if (turnO) {
            button.innerText = "X";
            turnO = false;
        } else {
            button.innerText = "O";
            turnO = true;
        }

        button.disabled = true;

        checkWinner();
    });
});

const disableBox = () => {

    for(let button of buttons){
        button.disabled = true;
    }
}

const enableBox = () => {

    for(let button of buttons){
        button.disabled = false;
        button.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = buttons[pattern[0]].innerText;
        let pos2Val = buttons[pattern[1]].innerText;
        let pos3Val = buttons[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner");
                showWinner(pos1Val);
            }
        }
    }
};


newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame)