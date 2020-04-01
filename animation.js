const headline = document.querySelector('.headline');
const container = document.querySelector('.container');
const result = document.querySelector('.result');
const previousOperand = document.querySelector('.previous-operand')
const currentOperand = document.querySelector('.current-operand');
const darkBtn = document.querySelector('.darkBtn');
const lightBtn = document.querySelector('.lightBtn');
const elements = [headline, container, result, previousOperand, currentOperand, darkBtn, lightBtn, ];
// Change to light version
const changeToLight = () => {
    elements.forEach(element => {
        element.setAttribute('data-light', '');
    });
    document.body.setAttribute('data-light', '');
}
// Change to dark version
const changeToDark = () => {
    elements.forEach(element => {
        element.removeAttribute('data-light');
    });
    document.body.removeAttribute('data-light');
}

lightBtn.addEventListener('click', changeToLight);
darkBtn.addEventListener('click', changeToDark);