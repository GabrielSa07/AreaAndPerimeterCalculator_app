export const perimeterTriangle = () => {
    const sideA = document.querySelector('#sideA') 
    const sideB = document.querySelector('#sideB') 
    const sideC = document.querySelector('#base')
    let result = Number(sideA.value) + Number(sideB.value) + Number(sideC.value)
    
    if(isNaN(result) === true) {
        alert(`Não é possível calcular o perímetro, valor inserido não é um número.`)
    } 

    const results = document.querySelector('#results')

    const h5 = document.createElement('h5')
    h5.innerText = 'Perímetro: '
    const p = document.createElement('p')
    p.innerText = `${result.toFixed(2)}`

    results.append(h5, p)
}

export const perimeterRectangle = () => {
    const base = document.querySelector('#base') 
    const height = document.querySelector('#height') 
    let result = (base.value * 2) + (height.value * 2)
    
    if(isNaN(result) === true) {
        alert(`Não é possível calcular o perímetro, valor inserido não é um número.`)
    } 

    const results = document.querySelector('#results')

    const h5 = document.createElement('h5')
    h5.innerText = 'Perímetro: '
    const p = document.createElement('p')
    p.innerText = `${result.toFixed(2)}`

    results.append(h5, p)
}

export const perimeterCircle = () => {
    const raio = document.querySelector('#raio')
    let result = (2 * Math.PI) * raio.value

    if(isNaN(result) === true) {
        alert(`Não é possível calcular o perímetro, valor inserido não é um número.`)
    } 

    const results = document.querySelector('#results')

    const h5 = document.createElement('h5')
    h5.innerText = 'Perímetro: '
    const p = document.createElement('p')
    p.innerText = `${result.toFixed(2)}`

    results.append(h5, p)
}

export const perimeterSquare = () => {
    const side = document.querySelector('#side')
    let result = side.value * 4

    if(isNaN(result) === true) {
        alert(`Não é possível calcular o perímetro, valor inserido não é um número.`)
    } 

    const results = document.querySelector('#results')

    const h5 = document.createElement('h5')
    h5.innerText = 'Perímetro: '
    const p = document.createElement('p')
    p.innerText = `${result.toFixed(2)}`

    results.append(h5, p)
}

export const perimeterTrapeze = () => {
    const side = document.querySelector('#side')
    const majorBase = document.querySelector('#majorBase')
    const smallerBase = document.querySelector('#smallerBase')
    let result = (side.value * 2) + Number(majorBase.value) + Number(smallerBase.value) 

    if(isNaN(result) === true) {
        alert(`Não é possível calcular o perímetro, valor inserido não é um número.`)
    }
        
    const results = document.querySelector('#results')

    const h5 = document.createElement('h5')
    h5.innerText = 'Perímetro: '
    const p = document.createElement('p')
    p.innerText = `${result.toFixed(2)}`

    results.append(h5, p)

}

export const perimeterDiamond = () => {
    const side = document.querySelector('#side')
    let result = Number(side.value) * 4

    if(isNaN(result) === true) {
        alert(`Não é possível calcular o perímetro, valor inserido não é um número.`)
    } 

    const results = document.querySelector('#results')

    const h5 = document.createElement('h5')
    h5.innerText = 'Perímetro: '
    const p = document.createElement('p')
    p.innerText = `${result.toFixed(2)}`

    results.append(h5, p)
}