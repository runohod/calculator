 //let num  = 52; 
// let firstName = 'runohod';
 //const isProgrammer = true

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'


plusBtn.onclick = function () {
    action = '+'
}

minusBtnBtn.onclick = function () {
    action = '-'
}

function printResult (result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
}


function computeNumbersWithAction (inp1, inp2, actionSymbol) {
const num1 = Number(inp1.value)
const num2 = Number(inp2.value)
//if (actionSymbol == '+') { 
  //  return num1 + num2 
//}
//else if (actionSymbol == '-') { 
   // return num1 - num2 
//}
return actionSymbol == '+' ? num1 + num2 : num1 - num2  //аналог того что выше 
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction( input1, input2, action)
    printResult(result)

    //if (action =='+') {
   // const result = Number(input1.value) + Number(input2.value)
    //printResult(sum)
    //}

    //else if (action =='-') {
   // const sum = Number(input1.value) - Number(input2.value)
    //printResult(sum)
    //}
    
}


