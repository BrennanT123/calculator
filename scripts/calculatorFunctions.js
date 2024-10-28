function add(a,b)
{
    return a+b;
}
function subtract(a,b)
{
    return a-b;
}
function multiply(a,b)
{
    return a*b;
}
function divide(a,b)
{
    return a/b;
}
function clear()
{
    return 0;
}
function percentage(a)
{
    return a/100;
}
function negative(a)
{
    return (a*100*-1)/100;
}

var firstNum = 0;
var operator = '';

const numberSelection = document.querySelectorAll('.number');
const outputContainer = document.querySelector('#output');
numberSelection.forEach(item=> item.addEventListener('click',toOutput));
const functionSelections = document.querySelectorAll('.function');
functionSelections.forEach(item => item.addEventListener('click',functionSelection))

const operatorSelections = document.querySelectorAll('.operator');
operatorSelections.forEach(item => item.addEventListener('click',pauseForSecondNumber))

const equalSelected = document.querySelector('#equals');
equalSelected.addEventListener('click',operate);

function numberToOutput(numSelect)
{
    return numSelect.textContent;
}

function functionSelection()
{
    switch (this.textContent) {
      case "%":
        outputContainer.textContent = parseInt(outputContainer.textContent)/100;
        break;
      case "C":
        outputContainer.textContent = '';
        break;
      case "+/-":
        outputContainer.textContent = negative(parseInt(outputContainer.textContent));
        console.log('+/-')
        break;
    }
}


function toOutput()
{

    outputContainer.textContent = outputContainer.textContent+numberToOutput(this);
    
}

function pauseForSecondNumber()
{
    if(outputContainer.textContent)
    {
    firstNum = outputContainer.textContent;
    outputContainer.textContent = '';
    operator = this.textContent
    }
}

function operate()
{
    console.log(operator);
    second = outputContainer.textContent;
    switch(operator)
    {
    case '/':
        outputContainer.textContent= firstNum/second;
        break;
    case '*':
        outputContainer.textContent= firstNum*second;
        break;
    case '+':
        outputContainer.textContent= firstNum+second;
        break;
    case '-':
        outputContainer.textContent= firstNum-second;
        break;
    default:
        console.log('error');
        break;
    }
}

