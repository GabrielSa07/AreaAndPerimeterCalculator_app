import { areaCircle, areaDiamond, areaRectangle, areaSquare, areaTrapeze, areaTriangle } from "../src/areaDOM.js"

import { perimeterCircle, perimeterDiamond, perimeterRectangle, perimeterSquare, perimeterTrapeze, perimeterTriangle } from "../src/perimeterDOM.js"

export const switchFunction = () => {
    const select = document.querySelector('#options')
        switch(select.value) {
            case 'triangle':
                perimeterTriangle()
                areaTriangle()
            break;
            case 'rectangle':
                perimeterRectangle()
                areaRectangle()
            break;
            case 'square':
                perimeterSquare()
                areaSquare()       
            break;
            case 'circle':
                perimeterCircle()
                areaCircle()
            break;
            case 'trapeze':
                perimeterTrapeze()
                areaTrapeze()
            break;
            case 'diamond':
                perimeterDiamond()
                areaDiamond()
            break;
        }  
}