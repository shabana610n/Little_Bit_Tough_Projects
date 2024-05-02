let random_num = Math.round(Math.random() * 100 + 1)
let submit = document.querySelector('#submit')
let user_input = document.querySelector('#guess-field')

let result = document.querySelector('#result')

let guess_slot = document.querySelector('#light-bg')   // previous guesses
let remaining_guess = document.querySelector('#remain-guess')
let low_or_heigh = document.querySelector('#low-or-heigh')

let para = document.createElement('p')

// let prev_guess = []
let num_guess = 1

let play_game = true

if (play_game) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        let guess = parseInt(user_input.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    // Checks user-input is between 0 to 100, number or string, positive value or not and it's validate to play a game for user or not! . 

    if (isNaN(guess) || (guess < 1)) {
        alert('Please enter a valid number that is more than 1 or equal to 1!')
    }
    else if (guess > 100) {
        alert('Please enter a number that is less than 100!')
    }

    else {
        // prev_guess.push(guess)
        if (num_guess === 10) {
            cleanGuess(guess)
            displayMsg(`Game Over, Random Number was ${random_num}`)  // displayMsg ko individually call krke hum style nhi kr skty qk ye sirf aik plain text msg hai, ye jis veriable me store hai usko call krke styling hogi. 
            low_or_heigh.style.color = 'red'
            endGame()
        }
        else {
            cleanGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    // if user-guess is true then use displayMsg's true msgs or for wrong guess use displayMsg's false msgs
    if (guess === random_num) {
        displayMsg(`You Guessed it Right!, Random Number was ${random_num}`)
        low_or_heigh.style.color = 'aqua'
        console.log(displayMsg);

        endGame()
    }
    else if (guess < random_num) {
        displayMsg(`Your Guessed Number is Too Low!`)
        low_or_heigh.style.color = 'orangered'
        console.log(displayMsg);

    }
    else {
        displayMsg(`Your Guessed Number is Too Heigh!`)
        low_or_heigh.style.color = 'crimson'
        console.log(displayMsg);
    }
}


function cleanGuess(guess) {
    // Display user previous guesses 
    user_input.value = ''
    guess_slot.innerHTML += ` ${guess}, `
    num_guess++;
    remaining_guess.innerHTML = `Guesses Remaining: ${11 - num_guess}`
}

function displayMsg(msg) {
    //   Display the message that user-guess is equal to random nummber(win) or not (lost).
    low_or_heigh.innerHTML = `<h4>${msg}</h4>`
}

function endGame() {
    user_input.value = ''
    user_input.setAttribute('disabled', '')
    para.classList.add('button')
    para.innerHTML = '<h3 id = "newGame">Start New Game!</h3>'
    para.style.color = 'black'
    para.style.backgroundColor = 'aqua'
    para.style.border = 'solid 3px black'
    para.style.textAlign = 'center'
    para.style.lineHeight = '4px'
    para.style.height = '50px'
    para.style.width = '200px'
    para.style.cursor = 'pointer'
    result.innerHTML = ''
    result.appendChild(para)
    play_game = false
    newGame()
}

function newGame() {
    let start_newGame = document.querySelector('#newGame')
    start_newGame.addEventListener('click', (e) => {
        e.preventDefault()
        random_num = Math.round(Math.random() * 100 + 1)
        // prev_guess = []
        num_guess = 1
        guess_slot.innerHTML = ''
        remaining_guess.innerHTML = `Guesses Remaining: ${11 - num_guess}`
        user_input.removeAttribute('disabled')
        result.removeChild(para) // resetting values

        play_game = true
    })
}