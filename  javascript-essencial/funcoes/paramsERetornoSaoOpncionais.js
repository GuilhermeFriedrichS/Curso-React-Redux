function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Calor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 12 ,13))
console.log(area(5, 5))