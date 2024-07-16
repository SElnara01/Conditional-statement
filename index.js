// ЗАДАНИЕ 2

// let number = prompt("Enter a number");
// switch (number) {
//   case '1':
//     alert("!");
//     break;
//   case '2':
//     alert("@");
//     break;
//   case '3':
//     alert("#");
//     break;
//   case '4':
//     alert("$");
//     break;
//   case '5':
//     alert("%");
//     break;
//   case '6':
//     alert("^");
//     break;
//   case '7':
//     alert("&");
//     break;
//   case '8':
//     alert("*");
//     break;
//   case '9':
//     alert("(");
//     break;
//   default:
//     alert("Нет такой клавиши");
//     break;
// }

// -------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 3(не до конца)

// let number = +prompt('Enter a number');
// let numeral_1 = Math.floor(number/100);
// let numeral_2 = Math.floor(number/10) % 10;
// let numeral_3 = number % 10;
// if(number > 999 || number < 100){
//     alert('Default');
// }

// if(numeral_1 == numeral_2){
//     alert('Первое и второе число совпадают');
// } else if(numeral_1 == numeral_3){
//     alert('Первое и третье число совпадают');
// } else if(numeral_2 == numeral_3){
//     alert('Второе и третье число совпадают');
// // } else if(numeral_1 == numeral_2 && numeral_3 == numeral_1){
// //     alert('Все числа совпадают');
// } else{
//     alert('Совпадений нет');
// }

// -------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 4
//  let year = prompt('Enter a number');
//  if(year % 4 == 0 && year != 100){
//     alert('Год високосный');
//  }else{
//     alert('Год невисокосный');
//  }

// -------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ факториал

// let a = +prompt();
// let fact = 1;
// for (let i = 1; i <= a; i++) {
//   fact = fact * i;
// }
// alert(fact);

// -------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 5

// let number = +prompt('Enter a number');
// let num1 = Math.floor(number/10000);
// let num2 = Math.floor(number/1000) % 10;
// let num3 = Math.floor(number/100) % 10;
// let num4 = Math.floor(number/10) % 10;
// let num5 = number % 10;
// if(num1 == num5 && num2 == num4){
//     alert('Палиндром');
// }else{
//     alert('No');
// }

// -------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 6

// let money = +prompt("Enter a number");
// let val = prompt('Enter a currency')
// switch (val) {
//   case "AZN":
//     alert(money * 1.7);
//     break;
//   case "EUR":
//     alert(money * 0.92);
//     break;
//   case "UAN":
//     alert(money * 7.25);
//     break;
//   default:
//     alert('Нет такой валюты');
//     break;
// }

// -------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 7

// let sum1 = +prompt('Введите сумму покупок');
// let sum2, sum3;
// if(sum1 >= 200 && sum1 <= 300){
//     sum2 = sum1 * 0.03;
//     sum3 = sum1 - sum2;
//     alert('Сумма к оплате:' + ' ' + sum3);
// }else if(sum1 > 300 && sum1 <= 500){
//     sum2 = sum1 * 0.05;
//     sum3 = sum1 - sum2;
//     alert('Сумма к оплате:' + ' ' + sum3);
// }else if(sum1 > 500){
//     sum2 = sum1 * 0.07;
//     sum3 = sum1 - sum2;
//     alert('Сумма к оплате:' + ' ' + sum3);
// }else{
//     alert('Скидка не предоставляется');
// }

// -------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 8

// let length = +prompt('Введите длину окружноси');
// let P = +prompt('Введите периметр квадрата');
// let side, radius_1, radius_2, pi = 3.14;
// side = P/4;
// radius_1 = side/2;
// radius_2 = length/(2*pi);
// if(radius_2 < radius_1){
//     alert('Окружность помещается');
// }else{
//     alert('Окружность не помещается');
// }

// -------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 9

let question1 = alert('Назовите столицу Азербайджана');
let answer1 = 'Баку';
let answer2 = 'Гянджа';
let answer3 = 'Габала';
let a = 0;
alert(answer1 + "  " +  answer2 + "  " + answer3);
let answer_1 = prompt('Введите ответ');
if(answer_1 == answer1){
    alert('Правильный ответ');
    a += 2;
}else{
    alert('Неправильный ответ');
}

let question2 = alert('Назовите столицу России');
let answer4 = 'Самара';
let answer5 = 'Москва';
let answer6 = 'Санкт-Петербург';
alert(answer4 + "  " +  answer5 + "  " + answer6);
let answer_2 = prompt('Введите ответ');
if(answer_2 == answer5){
    alert('Правильный ответ');
    a += 2;
}else{
    alert('Неправильный ответ');
}

let question3 = alert('Назовите столицу Турции');
let answer7 = 'Анталия';
let answer8 = 'Бурса';
let answer9 = 'Стамбул';
alert(answer7 + "  " +  answer8 + "  " + answer9);
let answer_3 = prompt('Введите ответ');
if(answer_3 == answer9){
    alert('Правильный ответ');
    a += 2;
}else{
    alert('Неправильный ответ');
}
alert('Ваш бал =' + " " + a);





// -------------------------------------------------------------------------------------------------------

// ЗАДАНИЕ 10


