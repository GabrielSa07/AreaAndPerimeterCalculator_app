import { areaCircle, areaDiamond, areaRectangle, areaSquare, areaTrapeze, areaTriangle } from "../src/areaDOM.js"

import { perimeterCircle, perimeterDiamond, perimeterRectangle, perimeterSquare, perimeterTrapeze, perimeterTriangle } from "../src/perimeterDOM.js"

export const selectTriangle = () => {

    const results = document.querySelector('#results')
    results.innerText = ''
    const section = document.querySelector('#section-itens')
    section.innerText =''

    const title = document.createElement('h1')
    title.innerText = 'Triângulo: '

    const labelSideA = document.createElement('label')
    labelSideA.htmlFor = 'sideA'
    labelSideA.innerText = 'Digite o tamanho do lado A:'
    const inputSideA = document.createElement('input')
    inputSideA.id = 'sideA'
    inputSideA.type = 'text'

    const labelSideB = document.createElement('label')
    labelSideB.htmlFor = 'sideB'
    labelSideB.innerText = 'Digite o tamanho do lado B:'
    const inputSideB = document.createElement('input')
    inputSideB.id = 'sideB'
    inputSideB.type = 'text'

    const labelBase = document.createElement('label')
    labelBase.htmlFor = 'base'
    labelBase.innerText = 'Digite o tamanho da Base:'
    const inputBase = document.createElement('input')
    inputBase.id = 'base'
    inputBase.type = 'text'

    const labelHeight = document.createElement('label')
    labelHeight.htmlFor = 'height'
    labelHeight.innerText = 'Digite a altura:' 
    const inputHeight = document.createElement('input')
    inputHeight.id = 'height'
    inputHeight.type = 'text'

    const br1 = document.createElement('br')
    const br2 = document.createElement('br')
    const br3  = document.createElement('br')
    const br4 = document.createElement('br')

    const button = document.createElement('button')
    button.innerText = 'Calcular'
    button.id = 'button-calculator'
    button.type = 'button'
    button.addEventListener('click', (ev) => {
        ev.preventDefault()
    
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
    })

    section.append(title, labelSideA, inputSideA, br1, labelSideB, inputSideB, br2,labelBase, inputBase, br3, labelHeight, inputHeight, br4, button)
}

export const selectSquare = () => {

    const results = document.querySelector('#results')
    results.innerText = ''
    const section = document.querySelector('#section-itens')
    section.innerText =''

    const title = document.createElement('h1')
    title.innerText = 'Quadrado:'

    const labelSide = document.createElement('label')
    labelSide.htmlFor = 'side'
    labelSide.innerText = 'Digite o tamanho do lado:'
    const inputSide = document.createElement('input')
    inputSide.id = 'side'
    inputSide.type = 'text'

    const br = document.createElement('br')
    
    const button = document.createElement('button')
    button.innerText = 'Calcular'
    button.id = 'button-calculator'
    button.type = 'button'
    button.addEventListener('click', (ev) => {
        ev.preventDefault()
    
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
    })

    section.append(title, labelSide, inputSide, br, button)
}

export const selectRectangle = () => {

    const results = document.querySelector('#results')
    results.innerText = ''
    const section = document.querySelector('#section-itens')
    section.innerText =''

    const title = document.createElement('h1')
    title.innerText = 'Retângulo: '

    const labelBase = document.createElement('label')
    labelBase.htmlFor = 'base'
    labelBase.innerText = 'Digite o tamanho da Base:'
    const inputBase = document.createElement('input')
    inputBase.id = 'base'
    inputBase.type = 'text'

    const labelHeight = document.createElement('label')
    labelHeight.htmlFor = 'height'
    labelHeight.innerText = 'Digite a altura:' 
    const inputHeight = document.createElement('input')
    inputHeight.id = 'height'
    inputHeight.type = 'text'

    const br = document.createElement('br')
    const br1 = document.createElement('br')
    
    const button = document.createElement('button')
    button.innerText = 'Calcular'
    button.id = 'button-calculator'
    button.type = 'button'
    button.addEventListener('click', (ev) => {
        ev.preventDefault()
    
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
    })

    section.append(title, labelBase, inputBase, br, labelHeight, inputHeight, br1, button)
}

export const selectCircle = () => {

    const results = document.querySelector('#results')
    results.innerText = ''
    const section = document.querySelector('#section-itens')
    section.innerText =''

    const title = document.createElement('h1')
    title.innerText = 'Círculo: '

    const labelRaio = document.createElement('label')
    labelRaio.htmlFor = 'raio'
    labelRaio.innerText = 'Digite o tamanho do Raio do Círculo:'
    const inputRaio = document.createElement('input')
    inputRaio.id = 'raio'
    inputRaio.type = 'text'

    const br = document.createElement('br')
    
    const button = document.createElement('button')
    button.innerText = 'Calcular'
    button.id = 'button-calculator'
    button.type = 'button'
    button.addEventListener('click', (ev) => {
        ev.preventDefault()
    
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
    })

    section.append(title, labelRaio, inputRaio, br, button)
}

export const selectTrapeze = () => {

    const results = document.querySelector('#results')
    results.innerText = ''
    const section = document.querySelector('#section-itens')
    section.innerText =''

    const title = document.createElement('h1')
    title.innerText = 'Trapézio: '

    const labelSide = document.createElement('label')
    labelSide.htmlFor = 'side'
    labelSide.innerText = 'Digite o tamanho do lado:'
    const inputSide = document.createElement('input')
    inputSide.id = 'side'
    inputSide.type = 'text'

    const labelMajorBase = document.createElement('label')
    labelMajorBase.htmlFor = 'majorBase'
    labelMajorBase.innerText = 'Digite o tamanho da Base Maior:'
    const inputMajorBase = document.createElement('input')
    inputMajorBase.id = 'majorBase'
    inputMajorBase.type = 'text'

    const labelsmallerBase = document.createElement('label')
    labelsmallerBase.htmlFor = 'smallerBase'
    labelsmallerBase.innerText = 'Digite o tamanho da Base Menor:'
    const inputsmallerBase = document.createElement('input')
    inputsmallerBase.id = 'smallerBase'
    inputsmallerBase.type = 'text'

    const br = document.createElement('br')
    const br1 = document.createElement('br')
    const br2 = document.createElement('br')
    
    const button = document.createElement('button')
    button.innerText = 'Calcular'
    button.id = 'button-calculator'
    button.type = 'button'
    button.addEventListener('click', (ev) => {
        ev.preventDefault()
    
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
    })

    section.append(title, labelSide, inputSide, br, labelMajorBase, inputMajorBase, br1, labelsmallerBase, inputsmallerBase, br2, button)
}

export const selectDiamond = () => {

    const results = document.querySelector('#results')
    results.innerText = ''
    const section = document.querySelector('#section-itens')
    section.innerText =''

    const title = document.createElement('h1')
    title.innerText = 'Losango: '

    const labelSide = document.createElement('label')
    labelSide.htmlFor = 'side'
    labelSide.innerText = 'Digite o tamanho do lado:'
    const inputSide = document.createElement('input')
    inputSide.id = 'side'
    inputSide.type = 'text'

    const labelMajorDiagonal = document.createElement('label')
    labelMajorDiagonal.htmlFor = 'majorDiagonal'
    labelMajorDiagonal.innerText = 'Digite o tamanho da Diagonal Maior:'
    const inputMajorDiagonal = document.createElement('input')
    inputMajorDiagonal.id = 'majorDiagonal'
    inputMajorDiagonal.type = 'text'

    const labelsmallerDiagonal = document.createElement('label')
    labelsmallerDiagonal.htmlFor = 'smallerDiagonal'
    labelsmallerDiagonal.innerText = 'Digite o tamanho da Diagonal Menor:'
    const inputsmallerDiagonal = document.createElement('input')
    inputsmallerDiagonal.id = 'smallerDiagonal'
    inputsmallerDiagonal.type = 'text'

    const br = document.createElement('br')
    const br1 = document.createElement('br')
    const br2 = document.createElement('br')
    
    const button = document.createElement('button')
    button.innerText = 'Calcular'
    button.id = 'button-calculator'
    button.type = 'button'
    button.addEventListener('click', (ev) => {
        ev.preventDefault()
    
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
    })

    section.append(title, labelSide, inputSide, br, labelMajorDiagonal, inputMajorDiagonal, br1, labelsmallerDiagonal, inputsmallerDiagonal, br2, button)
}
