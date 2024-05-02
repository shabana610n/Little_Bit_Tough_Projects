const btns = document.querySelectorAll('.btns-div button');
const resetBtn = document.getElementById('reset-btn');
const newBtn = document.getElementById('new-btn');
const msgWrapper = document.querySelector('.msg-wrapper');
const msg = document.getElementById('msg');

let turnO = true;  // It demonstrates playerO's chance to play game (baari).
let turnCount = 0; // Keep track of the number of turns

const winningCriteria = [    //  We're using 2D array here.
    [0, 1, 2],              //  ----- , horizontal winning pattern 0
    [3, 4, 5],             //   ----- , horizontal winning pattern 1
    [6, 7, 8],            //   -----  , horizontal winning pattern 2

    [0, 3, 6],          //   -----  , vertical winning pattern 3
    [1, 4, 7],         //   -----  , vertical winning pattern 4
    [2, 5, 8],        //   -----  , vertical winning pattern 5

    [0, 4, 8],      //   -----  , diagonal winning pattern 6
    [2, 4, 6],     //   -----  , diagonal winning pattern 7
];


btns.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {   // If turnO is equal to true, means if it's playerO's turn, print 'O'
            box.innerHTML = 'O';
            turnO = false;
        } else {
            box.innerHTML = 'X';
            turnO = true;
        }
        box.disabled = true; // Disable the button after it's clicked
        turnCount++; // Increment the turn count

        let isWinner = checkWinner();

        if (turnCount === 9 && !isWinner) {
            gameDraw();
        }
        else if (turnCount >= 5) {
            checkWinner(); // Call checkWinner function only on the fifth turn because no one can win in first four attempts even at fifth turn playerO only can be a winner and playerX can only be winner at six turn!
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgWrapper.style.display = 'flex'
    disableBoxes();
};

const disableBtns = () => {
    for (const btn of btns) {
        btn.disabled = true
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congragulations, Winner is player${winner}`
    msgWrapper.style.display = 'flex'
    disableBtns()
}


const checkWinner = () => {
    for (const pattern of winningCriteria) {
        let pos1Val = btns[pattern[0]].innerText;
        let pos2Val = btns[pattern[1]].innerText;
        let pos3Val = btns[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return true;
            }
        }
    }
};

const enableBtns = () => {
    for (const btn of btns) {
        btn.disabled = false
        btn.innerHTML = ""
        msgWrapper.style.display = 'none'
    }
}

const resetGame = () => {
    turnO = true
    turnCount = 0
    enableBtns()
}

newBtn.addEventListener('click', resetGame)
resetBtn.addEventListener('click', resetGame)