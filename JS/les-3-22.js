function square_perimeter(side) {
    return side * 4;
}

function square_ploshad(side) {
    return side * side;
}

otvet = prompt('Введите сторону квадрата')
alert('Периметр = ' + square_perimeter(otvet));
alert('Площадь = ' + square_ploshad(otvet));