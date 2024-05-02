const BASE_URL =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdowns = document.querySelectorAll('.select-container select');
const btn = document.querySelector('form button');
const fromCurr = document.querySelector('.from select')
const toCurr = document.querySelector('.to select')
const msg = document.querySelector(".msg");


for (const select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement('option')
        newOption.innerHTML = currCode;
        newOption.value = currCode;
        select.appendChild(newOption)

        if (select.id == 'from') {
            if (newOption.innerHTML == 'USD') {
                newOption.setAttribute('selected', '')
            }
        }
        else if (select.id == 'to') {
            if (newOption.innerHTML == 'PKR') {
                newOption.setAttribute('selected', '')
            }
        }

    } // For in loop ended

    select.addEventListener('change', (evnt) => {
        updateFlag(evnt.target)
    })
};

const updateExchangeRate = async () => {
    let amount = document.querySelector('.amount input')
    let amountVal = amount.value
    if (amountVal == String || amountVal < 1 || isNaN(amountVal)) {
        amountVal = 1
        amount.value = 1
    }


    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json()  // See the difference by removing await from here.
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount = (amountVal * rate).toFixed(2);
    msg.innerHTML = `<h4> ${amountVal} ${fromCurr.value} =&nbsp;&nbsp;&nbsp;${finalAmount} ${toCurr.value}</h4>`
};


const updateFlag = (element) => {
    let currCode = element.value
    let countryCode = countryList[currCode]
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector('img')
    img.src = newSrc
}

btn.addEventListener('click', (evnt) => {
    evnt.preventDefault()
    updateExchangeRate()
});

window.addEventListener('load', () => {
    updateExchangeRate()
});