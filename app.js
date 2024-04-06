 //let num  = 52; 
// let firstName = 'runohod';
 //const isProgrammer = true

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('submit')
const minusBtn = document.getElementById('submit')

submitBtn.onclick = function () {
    const sum = Number(input1.value) + Number(input2.value)
    resultElement.textContent = sum 
}