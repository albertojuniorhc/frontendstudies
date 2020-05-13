let runningTotal = 0;
let buffer = "0";
let previosOperator = null;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if (isNaN(value)){
        //this is NOT a number
        handleSymbol(value);
    } else {
        //tis is a number
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol (symbol){
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if (previosOperator === null ){
                // need two numbers to do math
                return;
            }
            flushOperation(parseInt(buffer));
            previosOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
        
    }
}

function handleMath (symbol) {
    if (buffer === '0') {
        //do nothing
        return;
    }

    const intBuffer = parseInt(buffer);

    if (runningTotal === 0){
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previosOperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer){
    if (previosOperator == '+') {
        runningTotal += intBuffer;
    } else if (previosOperator == '−') {
        runningTotal -= intBuffer;
    } else if (previosOperator == '×') {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
    console.log(previosOperator);
    screen.innerText = runningTotal;
}

function handleNumber (numberString){
    if (buffer === "0"){
        buffer = numberString;
    } else {
        buffer += numberString;
    }
    
}

function init() {
    document.querySelector('.calc-buttons')
        .addEventListener('click', function(event) {
            buttonClick(event.target.innerText);
        })
}

init();