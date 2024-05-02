let buttons = document.querySelectorAll('.box')
let body = document.querySelector('body')
let text = document.querySelectorAll('.text')

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);  // Jis bhi button pr click kry gy wo button target ho jye ga.
        if (e.target.id === 'gray') {
            body.style.backgroundColor = 'black'
            text[0].style.color = 'white';
            text[1].style.color = 'white'
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = 'aqua'
            text[0].style.color = 'black';
            text[1].style.color = 'black'
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
            text[0].style.color = 'white';
            text[1].style.color = 'white'
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
            text[0].style.color = 'black';
            text[1].style.color = 'black'
        }
    })
})