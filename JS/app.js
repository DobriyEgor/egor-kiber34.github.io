function hello() {
    document.getElementById('example').innerHTML = 'привет мир'
}

function reset() {
    document.getElementById('example').innerHTML = ''
}

function set_text(id, text) {
    document.getElementById(id).innerHTML = text
}

function submit() {
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value


    if (name == '') {
        document.getElementById('status').innerHTML = 'Заполните поле1 (мы хотим забрать данные)'
    } else if (email == '') {
        document.getElementById('status').innerHTML = 'Заполните поле2 (мы хотим забрать данные)'
    } else if (phone == '') {
        document.getElementById('status').innerHTML = 'Заполните поле3 (мы хотим забрать данные)'
    } else {
        document.getElementById('status').innerHTML = `Ну всё. Вы зарегались на вирусном сайте. Скоро мы скачаем вирус. Проверка: + Имя  ${name} + Имейл ${email} + Номер ${phone}`;
    }
}

//function setBgReg() {
//document.body.style.backgroundColor = 'random'
//var random = [red]
//}

function setBgReg(color) {
    document.body.style.backgroundColor = color;
}

function inputColor() {
    var input_color = document.getElementById('color').value

    document.body.style.backgroundColor = input_color;
}

function setBgReg(color) {
    document.getElementById(id).style.fontSize = size;
}

function lampOn() {
    document.getElementById('lamp').src = "images/pic_bulboff.gif"
    document.body.removeAttribute('style');
    document.getElementById('main').style.color = 'lime';
    document.getElementById('main').style.backgroundColor = '#000';
}

function lampOff() {
    document.getElementById('lamp').src = "images/pic_bulbon.gif"
    document.body.style.backgroundColor = '#fff'
    document.getElementById('main').style.color = '#000';
    document.getElementById('main').style.backgroundColor = '#fff';
}

function deleteTitle() {
    document.getElementById('title').style.display = 'none';
}

function createButton() {
    var btn = document.createElement('BUTTON');
    btn.innerHTML = 'Новая кнопка';
    document.getElementById('buttonList').appendChild(btn)
}

function createP() {
    var btn = document.createElement('P');
    btn.innerHTML = 'Новый абзац';
    document.getElementById('PList').appendChild(btn)
}


// добавление объекта
var person = Object();

var avto = new Object();

var mem = new Object();

// добавление свойств со значениями
person.name = 'Адис'
person.surname = 'Абебавич'
person.age = '0,5'
person.weight = '1000000000 тонн'
person.location = 'остров аддис абеба'
person.fullName = function () {
    return this.name + ' ' + this.surname;
}

avto.brand = 'ыыыыы'
avto.model = 'бибика от Адиса Абебавича'
avto.year = '100000000000000000год до н.э.'
avto.color = 'чёрный'
avto.img = '<img src="images/avtoto.jpg" alt="">'
avto.avtor = 'всё об авторе на прошлой кнопке'
avto.fullAvto = function () {
    return 'Бренд ' + this.brand +
        ' Модель  ' + this.model +
        ' Год создания ' + this.year +
        ' Цвет ' + this.color +
        this.img +
        'Автор' + this.avtor;
}




function showPerst() {
    document.getElementById('person').innerHTML = person.fullName() + ' ' + 'Возврвствавст ' + person.age + ' ' + 'Вес ' + person.weight;
}

function showAvto() {
    document.getElementById('avto').innerHTML = avto.fullAvto();
}

let cat = {
    poroda: 'Бурманская',
    color: 'Тёмно-шоколадная',
    age: '1 год',
    name: 'Зюзя'
}

cat.eyes = 'жёлтые'
cat.showInfo = function () {
    document.getElementById('person').innerHTML = `Порода: ${cat.poroda} <br>` + `Цвет: ${cat.color} <br>` + `Возвраст: ${cat.age} <br>` + `Имя: ${cat.name} <br>` + `Цвет глаз: ${cat.eyes} <br>`
}

const questions = [
    {
        question: 'Вопрос 1',
        answers: {
            1: 'yes',
            2: 'no',
            3: 'no',
            4: 'no'
        },
        rightAnswer: '1'
    },
    {
        question: 'Вопрос 2',
        answers: {
            1: 'no',
            2: 'yes',
            3: 'yes',
            4: 'yes'
        },
        rightAnswer: '2'
    }, 
    {
        question: 'Вопрос 3',
        answers: {
            1: 'yes',
            2: 'no',
            3: 'yes',
            4: 'no'
        },
        rightAnswer: '3'
    }, 
]




let testContrainer = document.getElementById('test');
let resultButton = document.getElementById('resultButton');
let resultContainer = document.getElementById('result');

function generateTest(questions, testContrainer) {
    let oat = [];
    let answers;

    for (let i = 0; i < questions.length; i++) {
        answers = [];
        for (let ans_text in questions[i].answers) {
            answers.push(
                `<label><br><input tupe="radio" name="question${i}">
                value="${ans_text}"> ${ans_text}) ${questions[i].answers[ans_text]} </label>`
            );
        }
    }
    testContrainer.innerHTML = out.join('');
}

generateTest(questions, testContrainer, resultContainer, resultButton);

function showResults(questions, testContrainer, resultContainer) {
    let answerContainers = testContrainer.querySelectorAll('.anwers');

    let userAnswer = ''
    let rightAnswersNum = 0;
}