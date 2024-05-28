<<<<<<< HEAD
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
=======
// Select all the button elements for the game board
const gameButtons = document.querySelectorAll('.btns'); // NodeList (9)
const buttonsWrapper = document.querySelector('.btns-div');
const gameTitle = document.querySelector('h1');
const messageWrapper = document.querySelector('.msg-wrapper');
const messageText = document.getElementById('msg');
const newGameButton = document.getElementById('new-btn');
const resetButton = document.getElementById('reset-btn');

let currentPlayer = 'O'; // Start with player 'O'

// Function to check for a winner or a draw
const checkWinner = () => {
    // Horizontal Winning Pattern
    if (
        (gameButtons[0].innerHTML === 'X' && gameButtons[1].innerHTML === 'X' && gameButtons[2].innerHTML === 'X') ||
        (gameButtons[3].innerHTML === 'X' && gameButtons[4].innerHTML === 'X' && gameButtons[5].innerHTML === 'X') ||
        (gameButtons[6].innerHTML === 'X' && gameButtons[7].innerHTML === 'X' && gameButtons[8].innerHTML === 'X') ||
        (gameButtons[0].innerHTML === 'O' && gameButtons[1].innerHTML === 'O' && gameButtons[2].innerHTML === 'O') ||
        (gameButtons[3].innerHTML === 'O' && gameButtons[4].innerHTML === 'O' && gameButtons[5].innerHTML === 'O') ||
        (gameButtons[6].innerHTML === 'O' && gameButtons[7].innerHTML === 'O' && gameButtons[8].innerHTML === 'O')
    ) {
        messageWrapper.style.display = 'block';
        messageText.innerText = `${currentPlayer} is the Winner`;
        gameTitle.style.display = 'none';
        buttonsWrapper.style.display = 'none';
        resetButton.style.display = 'none';
    }
    // Vertical Winning Pattern
    else if (
        (gameButtons[0].innerHTML === 'X' && gameButtons[3].innerHTML === 'X' && gameButtons[6].innerHTML === 'X') ||
        (gameButtons[1].innerHTML === 'X' && gameButtons[4].innerHTML === 'X' && gameButtons[7].innerHTML === 'X') ||
        (gameButtons[2].innerHTML === 'X' && gameButtons[5].innerHTML === 'X' && gameButtons[8].innerHTML === 'X') ||
        (gameButtons[0].innerHTML === 'O' && gameButtons[3].innerHTML === 'O' && gameButtons[6].innerHTML === 'O') ||
        (gameButtons[1].innerHTML === 'O' && gameButtons[4].innerHTML === 'O' && gameButtons[7].innerHTML === 'O') ||
        (gameButtons[2].innerHTML === 'O' && gameButtons[5].innerHTML === 'O' && gameButtons[8].innerHTML === 'O')
    ) {
        messageWrapper.style.display = 'block';
        messageText.innerText = `${currentPlayer} is the Winner`;
        gameTitle.style.display = 'none';
        buttonsWrapper.style.display = 'none';
        resetButton.style.display = 'none';
    }
    // Diagonal Winning Pattern
    else if (
        (gameButtons[0].innerHTML === 'X' && gameButtons[4].innerHTML === 'X' && gameButtons[8].innerHTML === 'X') ||
        (gameButtons[2].innerHTML === 'X' && gameButtons[4].innerHTML === 'X' && gameButtons[6].innerHTML === 'X') ||
        (gameButtons[0].innerHTML === 'O' && gameButtons[4].innerHTML === 'O' && gameButtons[8].innerHTML === 'O') ||
        (gameButtons[2].innerHTML === 'O' && gameButtons[4].innerHTML === 'O' && gameButtons[6].innerHTML === 'O')
    ) {
        messageWrapper.style.display = 'block';
        messageText.innerText = `${currentPlayer} is the Winner`;
        gameTitle.style.display = 'none';
        buttonsWrapper.style.display = 'none';
        resetButton.style.display = 'none';
    }
    else {
        // Check for a draw
        if ([...gameButtons].every(btn => btn.innerText !== '')) {
            messageWrapper.style.display = 'block';
            messageText.innerText = 'Game is Draw!';
            gameTitle.style.display = 'none';
            buttonsWrapper.style.display = 'none';
            resetButton.style.display = 'none';
>>>>>>> a0e82a3 (Added some more tough projects of JS)
        }
    }
};

<<<<<<< HEAD
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
=======
// Function to handle button clicks
const handleClick = (button) => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
    if (button.innerText === '') {
        button.innerText = currentPlayer;

        // Add event listeners for new game and reset buttons
        newGameButton.addEventListener('click', () => {
            button.innerText = '';
            button.removeAttribute('disabled');
            messageWrapper.style.display = 'none';
            gameTitle.style.display = 'block';
            buttonsWrapper.style.display = 'grid';
            resetButton.style.display = 'block';
        });
        resetButton.addEventListener('click', () => {
            button.innerText = '';
            button.removeAttribute('disabled');
            messageWrapper.style.display = 'none';
            gameTitle.style.display = 'block';
            buttonsWrapper.style.display = 'grid';
            resetButton.style.display = 'block';
        });
    } else {
        button.disabled = true;
    }
    checkWinner(); // Check for winner after each move
};

// Add event listeners to each game button
gameButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleClick(button);
    });
});
>>>>>>> a0e82a3 (Added some more tough projects of JS)
