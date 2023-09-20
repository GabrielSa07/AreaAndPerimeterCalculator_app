import { selectCircle, selectDiamond, selectRectangle, selectSquare, selectTrapeze, selectTriangle } from "./src/buttonDOM.js"

const body = document.getElementsByTagName('body')
const button = document.querySelector('#select-button')
const select = document.querySelector('#options')

button.addEventListener('click', (ev) => {

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

