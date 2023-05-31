var animals = ['Cat', 'Dog', 'Cow', 'Fish']

// .indexOf - определяет индекс элемента в массиве
// alert(animals.indexOf('Cow'))

alert('Исходный список: ' + animals)

// .splice - уд. эл массива с опред. индекса в опр. кол-ве
newAnimals = animals.splice(2, 1)
alert('Измененный список: ' + animals)
alert('Вырезанные эл списка: ' + newAnimals)