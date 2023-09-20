export const perimeterTriangle = () => {
    const sideA = document.querySelector('#sideA') 
    const sideB = document.querySelector('#sideB') 
    const sideC = document.querySelector('#base')
    let result = Number(sideA.value) + Number(sideB.value) + Number(sideC.value)
    
    if(isNaN(result) === true) {
        alert(`Não é possível calcular o perímetro, valor inserido não é um número.`)
    } else {
        return result.toFixed(2)
    }
}

export const perimeterRectangle = () => {
    const base = document.querySelector('#base') 
    const height = document.querySelector('#height') 
    let result = (base.value * 2) + (height.value * 2)
    
    if(isNaN(result) === true) {
        alert(`Não é possível calcular o perímetro, valor inserido não é um número.`)
    } else {
        return result.toFixed(2)
    }
}

export const perimeterCircle = () => {
    const raio = document.querySelector('#raio')
    let result = (2 * Math.PI) * raio.value

    if(isNaN(result) === true) {
        alert(`Não é possível calcular o perímetro, valor inserido não é um número.`)
    } else {
        return result.toFixed(2)
    }
}

export const perimeterSquare = () => {
    const side = document.querySelector('#side')
    let result = side.value * 4

    if(isNaN(result) === true) {
        alert(`Não é possível calcular o perímetro, valor inserido não é um número.`)
    } else {
        return result.toFixed(2)
    }
}

export const perimeterTrapeze = (a, b, c, d) => {
    const side = document.querySelector('#side')
    const majorBase = document.querySelector('#majorBase')
    const smallerBase = document.querySelector('#smallerBase')
    let result = (side.value * 2) + Number(majorBase.value) + Number(smallerBase.value) 

    if(isNaN(result) === true) {
        alert(`Não é possível calcular o perímetro, valor inserido não é um número.`)
    } else {
        return result.toFixed(2)
    }
}

export const perimeterDiamond = () => {
    const side = document.querySelector('#side')
    let result = Number(side.value) * 4

    if(isNaN(result) === true) {
        alert(`Não é possível calcular o perímetro, valor inserido não é um número.`)
    } else {
        return result.toFixed(2)
    }
}