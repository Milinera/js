// // Запросы по кинохе

// let numberOfFilms;

// function start () {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     } 
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };



// function rememberMeFilms () {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
        
//         if (a != null && b != null && a != '' && b != "" && a.length < 50) {
//             personalMovieDB.movies[a] = b;    
//             console.log ('done');
//         } else {
//             console.log ('error');
//             i--; 
//         } 
//     }
// }

// rememberMeFilms ();

// function detectPersonalLevel () {
//     if (personalMovieDB.count < 10) {
//         alert ('Просмотрено довольно мало фильмов');
//     } else if  (personalMovieDB.count > 10 && personalMovieDB.count < 50) {
//         alert ('Вы классический зритель');
//     } else if (personalMovieDB.count > 50) {
//         alert ('Вы киноман');
//     } else {
//         alert ('erorr');
//     }
// }

// detectPersonalLevel ();

// console.log(personalMovieDB);

// function showMeDB () { 
//     if (personalMovieDB.privat === false) {
//         console.log('')
//     }
// }

// showMeDB ();

// function writeYourGenres () {
//     for (i = 0; i < 3; i++) {
//         const a = prompt(`Ваш любимый жанр под номером: ${i + 1}`);
//         personalMovieDB.genres[i] = a
//     }
//     console.log(personalMovieDB.genres)
// }

// writeYourGenres ();


// // function sayHello(name) {
//     return `Привет, ${name}!`;
// }
// sayHello('Alex');
 
// function returnNeighboringNumbers(num) {
//     const val = num * 3;
//     return [val - 1, val, val + 1];
// };
// nul = returnNeighboringNumbers(5);
// console.log (nul)

// куб (объём и площадь)
// var cubeLength;
// function cube (cubeLength) {
//     if (typeof(cubeLength) === 'number' && cubeLength > 0) {
//         area = cubeLength * cubeLength * cubeLength;
//         volume = 6 * ( cubeLength * cubeLength);
//         console.log (`Объем куда равен: ${area}, площадь куба: ${volume}`);
//         return area, volume
//     } else {
//         console.log ('Error')
//     }
// }
// cube ('d');



// Создает из одного числа полоску чисел кратную числу
// function getMathResult(base, num) {
//     if (typeof(num) === 'number' && num > 0) {
//         var result = '';
//         for (i = 1; i <= num; i++) {
//             a = base * i;
//             result += a;
//             if (i !== num) {
//                 result += '---';
//             };
//         };
//         return result;
//     } else {
//         return base
//     };
// };
// console.log (getMathResult(5, 10));

// проверка билета
// var bullet;
// function getCoupeNumber(bullet) {
//     if (typeof(bullet) !== 'number') {
//         console.log('Проверьте правильность введенных данных')
//     } else if (bullet <= 0 && bullet > 36) {
//         console.log('В данном вагоне нет такого места')
//     } else {
//         console.log(`Ваше место в вагоне ${bullet}`)
//     }
// }
// getCoupeNumber(0)

// Елочка
// let result = '';
// const length = 9;
// for (let i = 1; i < length; i++) {
//     for (j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);


// Выводит все кратные числа от 0 до 't'
// var p;
//     t = 100;
// for (i = 0; i < t; i++) {   
//     p = i % 7;
//     if (p === 0) {
//         console.log(i);
//     }
// }


// Четные и нечетные двуми способами
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// i = 0;
// while (i <= 16) {
//     if (i % 2 === 1) {
//         console.log(i);
//     } else {
//         console.log(i, ' - Четное')
//     }
//     i++
// }


// ввод в массив цмфр от 5 до 10
// const arr = [];
// for (let i = 0; i <= 5; i++) {
//     arr[i] = i + 5
// };
// console.log (arr)


// Перенос данных с одного массива в другой
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
//     console.log (result[i])
// }


// Работа с типом данных в массиве
// var p = 0;
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === "number") {
//         data[i] *= 2;
//     } else {
//         data[i] += ' - done'
//     };
//     console.log (data[i])
// }
// console.log ('\n')
// for (i = data.length - 1; i >= 0; i--) {
//     console.log (data[i])
//

// Полная пиромидка
// var result = '';
//     length = 10;

// for (i = 1; i < length; i++) {
//     for (s = length - i; s > 0; s--) {
//         result += ' '
//     };
//     for (j = 0; j < i ; j++) {
//         result += '*';
//         if (j > 0) {
//             result += '*';
//         }
//     }
//     result += '\n';
// }

// console.log (result)

// остаток от деления

var getTimeFromMinutes;
function time (getTimeFromMinutes) {
    if (typeof(getTimeFromMinutes) !== 'number') {
        console.log (`${getTimeFromMinutes} не является числом`)
    } else if (getTimeFromMinutes < 0) {
        console.log (`${getTimeFromMinutes} отрицательное число`)
    } else {
        a = getTimeFromMinutes % 60
        b = Math.floor(getTimeFromMinutes / 60)
        if (a % 100 > 10 && a % 100 <= 20) {
            aStr = (`${a} минут`)
        } else if (a % 10 >= 2 && a % 10 < 5) {
            aStr = (`${a} минуты`)
        } else if (a % 10 === 1) {
            aStr = (`${a} минута`)
        } else if (a % 10 > 4 && a % 10 <= 9 || a % 10 === 0) {
            aStr = (`${a} минут`)
        }
        if (b % 100 > 10 && b % 100 <= 20) {
            bStr = (`${b} часa`)
        } else if (b % 10 >= 2 && b % 10 < 5) {
            bStr = (`${b} часa`)
        } else if (b % 10 === 1) {
            bStr = (`${b} час`)
        } else if (b % 10 > 4 && b % 10 <= 9 || b % 10 === 0) {
            bStr = (`${b} часов`)
        }
        getTimeFromMinutes = (`${bStr}, ${aStr}`)
    }
    return getTimeFromMinutes
}
var result = time (127)
console.log (result)