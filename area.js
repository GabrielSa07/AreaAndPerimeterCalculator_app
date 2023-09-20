const areaTriangle = (b, h) => {
    result = (b* h) / 2
    return result
}

const areaRectangle = (b, h) => {
    result = b * h
    return result
}

const areaCircle = (a) => {
    result = Math.PI * (a ** 2)
}

const areaSquare = (a) => {
    result = a ** 2
    return result
}

const areaTrapeze = (bme, bma, h) => {
    result = ((bme + bma) * h ) / 2 
    return result
}

const areaDiamond = (dma, dme) => {
    result = (dma * dme) / 2
    return result
}