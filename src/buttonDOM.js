export const selectTriangle = () => {

    const section = document.querySelector('#section-itens')

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

    const br = document.createElement('br')

    const button = document.createElement('button')
    button.innerText = 'Calcular'
    button.id = 'button-calculator'
    button.type = 'button'

    section.append(title, labelSideA, inputSideA, labelSideB, inputSideB, labelBase, inputBase, labelHeight, inputHeight, button)
}

export const selectSquare = () => {

    const section = document.querySelector('#section-itens')

    const title = document.createElement('h1')
    title.innerText = 'Quadrado:'

    const labelSide = document.createElement('label')
    labelSide.htmlFor = 'side'
    labelSide.innerText = 'Digite o tamanho do lado A:'
    const inputSide = document.createElement('input')
    inputSide.id = 'side'
    inputSide.type = 'text'

    const br = document.createElement('br')
    
    const button = document.createElement('button')
    button.innerText = 'Calcular'
    button.id = 'button-calculator'
    button.type = 'button'

    section.append(title, labelSide, inputSide, button)
}

export const selectRectangle = () => {

    const section = document.querySelector('#section-itens')

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
    
    const button = document.createElement('button')
    button.innerText = 'Calcular'
    button.id = 'button-calculator'
    button.type = 'button'

    section.append(title, labelBase, inputBase, labelHeight, inputHeight, button)
}

export const selectCircle = () => {

    const section = document.querySelector('#section-itens')

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

    section.append(title, labelRaio, inputRaio, button)
}

export const selectTrapeze = () => {

    const section = document.querySelector('#section-itens')

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
    
    const button = document.createElement('button')
    button.innerText = 'Calcular'
    button.id = 'button-calculator'
    button.type = 'button'

    section.append(title, labelSide, inputSide, labelMajorBase, inputMajorBase, labelsmallerBase, inputsmallerBase, button)
}

export const selectDiamond = () => {

    const section = document.querySelector('#section-itens')

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
    
    const button = document.createElement('button')
    button.innerText = 'Calcular'
    button.id = 'button-calculator'
    button.type = 'button'

    section.append(title, labelSide, inputSide, labelMajorDiagonal, inputMajorDiagonal, labelsmallerDiagonal, inputsmallerDiagonal, button)
}
