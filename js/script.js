// Задание 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки
// и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4,
// ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью
// console.log и вернуть пустой объект.


let userNumber = '0';

while(true) { 
    inputNumber();

    if(userNumber >= 0 && userNumber < 1000) {
        userNumber = userNumber.split('');
        while(userNumber[2] == undefined) {
            userNumber.unshift('0');
        }
        transNumberInTxt(userNumber);
    } else {
//        alert('Вы ввели неверное значение');
//        break;
        userNumber = '000';
        transNumberInTxt(userNumber);
    }

    function inputNumber() {
        userNumber = prompt('Введите число в диапазоне от 0 до 999');
        return;
    }

    function transNumberInTxt(){
        let i = 0;
        let numberObj = {
            'сотни': 0,
            'десятки': 0,
            'единицы': 0
        };
        for (let answer in numberObj){
            numberObj[answer] = userNumber[i];
            console.log(answer + ': ' + numberObj[answer]);
            i++;
        }
    }
}


// 2 вариант (без обьекта с выводом результата сразу в лог)

let userNumber = '';

while(true) { 
    inputNumber();

    if(userNumber >= 0 && userNumber < 1000) {
        userNumber = userNumber.split('');
        while(userNumber[2] == undefined) {
            userNumber.unshift('0');
        }
        transNumberInTxt(userNumber);
    } else {
        alert('Вы ввели неверное значение');
        break;
    }

    function inputNumber() {
        userNumber = prompt('Введите число в диапазоне от 0 до 999');
        return;
    }

    function transNumberInTxt(){
        let NumberObj = ['сотен', 'десятков', 'единиц'];
            for(let i = 0; i < userNumber.length; i++) {
                console.log(NumberObj[i] + ': ' + userNumber[i]);
            }
    }
}




// Задание 2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n (номер
// задается пользователем)

let levels = [
	{
		'1': {
			lvlText: 'Налево пойдёшь - коня потеряешь, направо пойдёшь - жизнь потеряешь, прямо пойдёшь - жив будешь, да себя позабудешь',
			answers: {
                    '1': 'Пойти налево',
                    '2': 'Пойти направо',
                    '3': 'Пойти прямо',
                    '4': 'Выбрать уровень'
			}
		}
	},
	{
		'1': {
			lvlText: 'Вы встретили Соловья-разбойника',
			answers: {
                    '1': 'Сразиться с ним',
                    '2': 'Попробовать обойти',
                    '4': 'Выбрать уровень'
			}
		},
		'2': {
			lvlText: 'Вы встретили Змея Горыныча',
			answers: {
                    '1': 'Украсть сокровища',
                    '2': 'Сразиться с ним',
                    '4': 'Выбрать уровень'
			}
		},
		'3': {
			lvlText: 'Вы встретили Варвара-красавица',
			answers: {
                    '1': 'Жениться на ней',
                    '4': 'Выбрать уровень'
			}
		}
	}
];
let endOfTheGame = false;
let currentStage = 0;
let userChoice = '1';

while(!endOfTheGame) {
	if(currentStage >= 0 && currentStage < levels.length){
		let choices = '';
		
		for(let answer in levels[currentStage][userChoice].answers){
			choices += answer + ' - ' + levels[currentStage][userChoice].answers[answer] + '\n';
		}

		userChoice = prompt(levels[currentStage][userChoice].lvlText + '\n' + choices);
        if(userChoice == '4') {
            userChoice = prompt('Введите номер уровня (1, 2, 3)');
		    currentStage = 1;
        } else {
		    currentStage++;
        }
	} else {
		if(userChoice == '1') {
			alert("И жили вы долго и счастливо!");
			endOfTheGame = true;
		} else {
			alert("И сложили вы буйну голову!");
			endOfTheGame = true;	
		}			
	}
}