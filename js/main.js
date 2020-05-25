"use strict";
/* 12. Практика. ч1 Начинаем создавать приложение

Задание на урок:
1) Создать переменную numberOfFilms  и в нее поместить ответ от пользователя на вопрос:
"Сколько фильмов вы уже посмотрели?" */

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

/* 2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - союда передает ответ на первый вопрос
    - movies -  в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект 
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean (логичское) значение - false */

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

/* 3) Задайте пользователю по два раза вопросы:
    - "Один из последних просмотренных фильмов?"
    - "На сколько оцените его?"
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        "logan": "8.1"
    }
Проверьте, чтобы все работало без ошибок в консоли */
const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

/* Урок 13 - Условия  - Сonditions */

if (4 == 9) {
    console.log("Ok!");
} else {
    console.log("Error");
}

const num = 50;

if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("Много");
} else {
    console.log("OK!");
}

/* Тернарный оператор! - в его работе участвует 3 агрумента, 
это единсвтенный тернарный оператор, который есть в JS  на текущий момент */
(num === 50) ?  console.log("OK!") : console.log("Error");

/* Бинарный аргумент:
    4 + 4;
Унарный аргумент:
    +'4' */

 /* конструкция switch js  на строгое сравнение! */

switch (num) {
    case 49:
        console.log("Неверно!");
        break;
    case 100:
        console.log("Неверно!");
        break;
    case 50:
        console.log("В точку!");
        break;
    default:
        console.log("Не в этот раз!");
        break; 
}


