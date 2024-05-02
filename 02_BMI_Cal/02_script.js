let form = document.querySelector('form')

// Outside the function, below expression will give us an empty value.
// let height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
    e.preventDefault()  // Don't use form action that sends user-input to server etc.

    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let result = document.querySelector('.result')

    if (height == '' || height == 0 || isNaN(height)) {
        result.innerHTML = 'Please Enter Your Valid Height!'
        result.style.display = 'block'  // Result properties already set krke, display none kiya hai css file me, or kha hai ky jb event occur ho to display kr dena.
    }

    else if (weight == '' || weight == 0 || isNaN(weight)) {
        result.innerHTML = 'Please Enter Your Valid Weight!'
        result.style.display = 'block'
    }

    else if (height, weight == '' || height, weight == 0 || isNaN(height, weight)) {
        result.innerHTML = 'Please Enter Your Valid Height and Weight!'
        result.style.display = 'block'
    }
    else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // result.innerHTML = `Your BMI is ${bmi}`
        result.style.color = 'black'
        result.style.backgroundColor = 'aqua'
        result.style.display = 'block'

        let coloring = document.createElement('span')

        if (bmi < 18.6) {
            coloring.innerHTML = '(Underweight)'
            coloring.style.color = 'orangered'

        } 
        else if (bmi >= 18.6 && bmi < 24.9) {
            coloring.innerHTML = '(Normal)'
            coloring.style.color = 'green'
        } 
        else {
            coloring.innerHTML = '(Overweight)'
            coloring.style.color = 'red'
        }
        result.innerHTML = `Your BMI is ${bmi} `
        result.appendChild(coloring)
    }
})