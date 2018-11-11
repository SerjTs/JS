//let btn1 = document.querySelector('#btn1');
//btn1.addEventListener('click', ()=>{
//    demoTask3script();
//});

// Задача 1.
//
//let i=0;
//let prime = "";
//
//while (i<100) {
//    for (let k=2; k<=i; k++) {
//        if (i % k == 0 && k < i ){
//            i++;
//            continue;  
//        } 
//        if (i !== k) continue;
//        prime = prime + k + ', ';
//    }
//    i++;
//}
//
//alert(prime.substring(0, prime.length - 2));


function demoTask1script(){
    let i = 0;
    while (i < 100) {
        if (isPrimeNumber(i)) {
            console.log(i);
        }
        i++;
    }

    function isPrimeNumber(number) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        if (number > 1) {
            return true;
        }
        return false;
    }
}


// Задача 2.
//
function demoTask2script(){
    let i = 0;

    do{
        number(i);
        i++;
    }while (i <= 10);

    function number (i){
        if (i === 0) {
            console.log(i + ' - это 0');
        } else if (i % 2 === 0){
            console.log(i + ' - это чётное число');
        } else if (i % 2 !== 0){
            console.log(i + ' - это нечётное число');
        }
    }
}

// Задача 3.*
//
function demoTask3script(){
    for (let i=0; i<10; alert(i++)){};
}


// Задача 4.*
//
function demoTask4script(){
    let string=''

    for (let i = 1; i < 21; i++) {
        string = string + 'x'
        console.log(string);
    }
}