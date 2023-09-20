export const areaTriangle = () => {
    const base = document.querySelector('#base')
    const height = document.querySelector('#height')
    let result = (height.value * base.value) / 2

    if(isNaN(result) === true) {
        alert(`Não é possível calcular a área, valor inserido não é um número.`)
    } 

    const results = document.querySelector('#results')

    const h3 = document.createElement('h3')
    h3.innerText = 'Área: '
    const p = document.createElement('p')
    p.innerText = `${result.toFixed(2)}`

    results.append(h3, p)
}

export const areaRectangle = () => {
    const base = document.querySelector('#base')
    const height = document.querySelector('#height')
    let result = height.value * base.value

    if(isNaN(result) === true) {
        alert(`Não é possível calcular a área, valor inserido não é um número.`)
    } 

    const results = document.querySelector('#results')

    const h3 = document.createElement('h3')
    h3.innerText = 'Área: '
    const p = document.createElement('p')
    p.innerText = `${result.toFixed(2)}`

    results.append(h3, p)
}

export const areaCircle = () => {
    const raio = document.querySelector('#raio')
    let result = Math.PI * (raio.value ** 2)

    if(isNaN(result) === true) {
        alert(`Não é possível calcular a área, valor inserido não é um número.`)
    } 

    const results = document.querySelector('#results')

    const h3 = document.createElement('h3')
    h3.innerText = 'Área: '
    const p = document.createElement('p')
    p.innerText = `${result.toFixed(2)}`

    results.append(h3, p)
}

export const areaSquare = () => {
    const side = document.querySelector('#side')
    let result = side.value ** 2
   
    if(isNaN(result) === true) {
        alert(`Não é possível calcular a área, valor inserido não é um número.`)
    } 

    const results = document.querySelector('#results')

    const h3 = document.createElement('h3')
    h3.innerText = 'Área: '
    const p = document.createElement('p')
    p.innerText = `${result.toFixed(2)}`

    results.append(h3, p)
}

export const areaTrapeze = () => {
    const side = document.querySelector('#side')
    const majorBase = document.querySelector('#majorBase')
    const smallerBase = document.querySelector('#smallerBase')
    let result = ((Number(smallerBase.value) + Number(majorBase.value)) * Number(side.value))  / 2 
    
    if(isNaN(result) === true) {
        alert(`Não é possível calcular a área, valor inserido não é um número.`)
    } 

    const results = document.querySelector('#results')

    const h3 = document.createElement('h3')
    h3.innerText = 'Área: '
    const p = document.createElement('p')
    p.innerText = `${result.toFixed(2)}`

    results.append(h3, p)
}

export const areaDiamond = () => {
    const majorDiagonal = document.querySelector('#majorDiagonal') 
    const smallerDiagonal = document.querySelector('#smallerDiagonal')
    let result = (majorDiagonal.value * smallerDiagonal.value) / 2
    
    if(isNaN(result) === true) {
        alert(`Não é possível calcular a área, valor inserido não é um número.`)
    } 

    const results = document.querySelector('#results')

    const h3 = document.createElement('h3')
    h3.innerText = 'Área: '
    const p = document.createElement('p')
    p.innerText = `${result.toFixed(2)}`

    results.append(h3, p)
}