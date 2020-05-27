"use strict";
// /* 12. Практика. ч1 Начинаем создавать приложение

// Задание на урок:
// 1) Создать переменную numberOfFilms  и в нее поместить ответ от пользователя на вопрос:
// "Сколько фильмов вы уже посмотрели?" */

// let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// /* 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - союда передает ответ на первый вопрос
//     - movies -  в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект 
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean (логичское) значение - false */

//     const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
//     };

// /* 3) Задайте пользователю по два раза вопросы:
//     - "Один из последних просмотренных фильмов?"
//     - "На сколько оцените его?"
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
//     movies: {
//         "logan": "8.1"
//     }
// Проверьте, чтобы все работало без ошибок в консоли */
// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// /* Урок 13 - Условия  - Сonditions */

// if (4 == 9) {
//     console.log("Ok!");
// } else {
//     console.log("Error");
// }

// const num = 50;

// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("Много");
// } else {
//     console.log("OK!");
// }

// /* Тернарный оператор! - в его работе участвует 3 агрумента, 
// это единсвтенный тернарный оператор, который есть в JS  на текущий момент */
// (num === 50) ?  console.log("OK!") : console.log("Error");

// /* Бинарный аргумент:
//     4 + 4;
// Унарный аргумент:
//     +'4' */

//  /* конструкция switch js  на строгое сравнение! */

// switch (num) {
//     case 49:
//         console.log("Неверно!");
//         break;
//     case 100:
//         console.log("Неверно!");
//         break;
//     case 50:
//         console.log("В точку!");
//         break;
//     default:
//         console.log("Не в этот раз!");
//         break; 
// }


// /* 14. Циклы */

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++; 
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// var x = 0;
// var z = 0;
// labelCancelLoops: while (true) {
//   console.log("Внешний цикл: " + x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Внутренний цикл: " + z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }
// /* Урок 15 Практика, ч.2 Применяем уловия и циклы
//   Задание на урок:

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла */

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");
   
//     personalMovieDB.movies[a] = b;  
// }

// console.log(personalMovieDB);

// /* 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять.  (К любой строке можно обратиться как
// str.length - и получить ее длину) */

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");  
//     } else {
//          console.log(Error);
//          i--;
//     }
// }  
// console.log(personalMovieDB);

// /* 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка" */

// if (personalMovieDB.count < 10 ) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count < 30 ) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// /* 4) Потренироваться и переписать цикл еще двумя способами */
 
// /* 16. Функции, стрелочные ф-ции (ES6)*/

// function showFirstMessage(text) {  /* Должно быть глаголом! */
//     console.log(text);
//     let num = 20; /* -- Переменная доступна только внутри функции! */
// }
// showFirstMessage("Hello, World!");

// console.log(num);

// function calc(a, b) {
//     return (a + b);
//     console.log('dwed'); /* unreachable!  код после return - работать не будет!  */ 
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(6, 10));
// console.log(calc(8, 1));

// function ret() {
//     let num = 50;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log('Hello');
// }; 

// logger();

// const calc = (a, b) => a + b;

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };

//  /* 17. Методы и свойства строк и чисел */

// /* Методы для строк*/

 
//  const arr = [1, 2, 3];
//  console.log(arr.length); /* 3 */

//  const str = "test";
  
//  console.log(str[2]); /* s */

//  console.log(str.toUpperCase()); /* TEST */
//  console.log(str.toLowerCase()); /* test */

// /* Методы - Поиск подстроки */

//  const fruit = 'Some fruit';
//  console.log(fruit.indexOf('f')); /* 5 */


//  const logg = 'Hello World';

//  console.log(logg.slice(6, 11)); /* World / Поддерживает отриц знач */

//  console.log(logg.substring(6, 11)); /* World /Не поддерживает отриц знач */

//  console.log(logg.substr(6, 5)); /* World /Сколько символов надо вырезать */

//  /* Числа! */

//  const num = 12.2;
//  console.log(Math.round(num)); /* 12 */

//  const test ='12.2px';

//  console.log(parseInt(test)); /* 12 */
//  console.log(parseFloat(test)); /* 12.2 */


 /* 18. Практика , ч3. Используем функции */

 /* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");  
        } else {
            console.log(Error);
            i--;
        }
    }
}  

// rememberMyFilms();

function detectPersonslLevel() {
    if (personalMovieDB.count < 10 ) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count < 30 ) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

// detectPersonslLevel();


function showMyDB(hidden) {
    if(!hidden) {
       console.log(personalMovieDB);
    } 
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);      
    }
}

writeYourGenres();


/* 19. Callback- функции */

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function(){
    console.log("Я прошел этот урок!");
});
