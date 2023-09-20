export const areaTriangle = () => {
    const base = document.querySelector('#base')
    const height = document.querySelector('#height')
    let result = (height.value * base.value) / 2

    if(isNaN(result) === true) {
        alert(`Não é possível calcular a área, valor inserido não é um número.`)
    } else {
        return result.toFixed(2)
    }
}

export const areaRectangle = () => {
    const base = document.querySelector('#base')
    const height = document.querySelector('#height')
    let result = height.value * base.value

    if(isNaN(result) === true) {
        alert(`Não é possível calcular a área, valor inserido não é um número.`)
    } else {
        return result.toFixed(2)
    }
}

export const areaCircle = () => {
    const raio = document.querySelector('#raio')
    let result = Math.PI * (raio.value ** 2)

    if(isNaN(result) === true) {
        alert(`Não é possível calcular a área, valor inserido não é um número.`)
    } else {
        return result.toFixed(2)
    }
}

export const areaSquare = () => {
    const side = document.querySelector('#side')
    let result = side.value ** 2
   
    if(isNaN(result) === true) {
        alert(`Não é possível calcular a área, valor inserido não é um número.`)
    } else {
        return result.toFixed(2)
    }
}

export const areaTrapeze = () => {
    const side = document.querySelector('#side')
    const majorBase = document.querySelector('#majorBase')
    const smallerBase = document.querySelector('#smallerBase')
    let result = ((Number(smallerBase.value) + Number(majorBase.value)) * Number(side.value))  / 2 
    
    if(isNaN(result) === true) {
        alert(`Não é possível calcular a área, valor inserido não é um número.`)
    } else {
        return result.toFixed(2)
    }
}

export const areaDiamond = () => {
    const majorDiagonal = document.querySelector('#majorDiagonal') 
    const smallerDiagonal = document.querySelector('#smallerDiagonal')
    let result = (majorDiagonal.value * smallerDiagonal.value) / 2
    
    if(isNaN(result) === true) {
        alert(`Não é possível calcular a área, valor inserido não é um número.`)
    } else {
        return result.toFixed(2)
    }
}