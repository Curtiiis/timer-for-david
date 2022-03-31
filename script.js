const resultHours = document.querySelector('#result-hours')
const resultMinutes = document.querySelector('#result-minutes')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')

hours.addEventListener('input', () => {
    resultHours.textContent = hours.value
})

minutes.addEventListener('input', () => {
    resultMinutes.textContent = minutes.value
})

const liTime = document.getElementsByClassName('li-time')
let minutesArray = ['05', '10', '15', '20', '30', '35', '40', '45'];

for (let i = 0; i < minutesArray.length; i++) {
    document.getElementsByClassName('li-time')[i].addEventListener('click', (e) => {
        hours.value = '00';
        resultHours.textContent = hours.value;
        minutes.value = minutesArray[i];
        resultMinutes.textContent = minutes.value;
    })
}

