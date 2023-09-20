import { selectCircle, selectDiamond, selectRectangle, selectSquare, selectTrapeze, selectTriangle } from "./src/buttonDOM.js"



const button = document.querySelector('#select-button')
const select = document.querySelector('#options')

button.addEventListener('click', (ev) => {
    ev.preventDefault()

    switch(select.value) {
        case 'triangle':
            selectTriangle()
        break;
        case 'rectangle':
            selectRectangle()
        break;
        case 'square':
            selectSquare()
        break;
        case 'circle':
            selectCircle()
        break;
        case 'trapeze':
            selectTrapeze()
        break;
        case 'diamond':
            selectDiamond()
        break;
    }
})


const buttonCalc = document.querySelector('#button-calculator')

buttonCalc.addEventListener('click', (ev) => {
    ev.preventDefault()

    switch(select.value) {
        case 'triangle':
            
        break;
        case 'rectangle':
            
        break;
        case 'square':
            
        break;
        case 'circle':
            
        break;
        case 'trapeze':
            
        break;
        case 'diamond':
            
        break;
    }
})