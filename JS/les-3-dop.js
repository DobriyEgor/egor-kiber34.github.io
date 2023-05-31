function half_perimeter() {
    return (a+b+c)/2
}

function square(a, b, c) {
    var p = half_perimeter()
    return Math.sqrt(p*(p-a)*(p-b)*(p-c))
}

var a = Number(prompt('Введите сторону а'))
var b = Number(prompt('Введите сторону b'))
var c = Number(prompt('Введите сторону c'))

alert('Площадь треугольника: ' + square(a, b, c))