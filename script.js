// // Запросы по кинохе
// let numberOfFilms;
// function start () {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// };

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     rememberMeFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                 b = prompt('На сколько оцените его?', '');
//             if (a != null && b != null && a != '' && b != "" && a.length < 50) {
//                 personalMovieDB.movies[a] = b;    
//                 console.log ('done');
//             } else {
//                 console.log ('error');
//                 i--; 
//             } 
//         }
//     },
//     detectPersonalLevel: function () {
//         if (personalMovieDB.count < 10) {
//             alert ('Просмотрено довольно мало фильмов');
//         } else if  (personalMovieDB.count > 10 && personalMovieDB.count < 50) {
//             alert ('Вы классический зритель');
//         } else if (personalMovieDB.count > 50) {
//             alert ('Вы киноман');
//         } else {
//             alert ('erorr');
//         }
//     },
//     showMeDB: function () {
//         if (personalMovieDB.privat === false) {
//             console.log('Закрыт')
//         } else {
//             console.log('Открыт')
//         }
//     },
//     writeYourGenres: function () {
//         var resultGenres = `Любимый жанр `
//         for (i = 0; i < 3; i++) {
//             const a = prompt(`Ваш любимый жанр под номером: ${i + 1}`);
//             console.log (a)
//             if (a === null || a === '') {
//                 i--
//                 alert ('Напиши блять жанр а не врт эту хуйню')
//             } else {
//                 personalMovieDB.genres[i] = a
//             }
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             resultGenres  += `# ${i + 1} - это ${item} `
//         })
//         console.log(resultGenres)
//     },
//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat === false) {
//             personalMovieDB.privat = true
//         } else {
//             personalMovieDB.privat = false 
//         }
//     },
// };

// personalMovieDB.rememberMeFilms ();
// personalMovieDB.detectPersonalLevel ();
// personalMovieDB.showMeDB ();
// personalMovieDB.writeYourGenres ();
// personalMovieDB.toggleVisibleMyDB ();
// personalMovieDB.showMeDB ();
// console.log (personalMovieDB)

// function sayHello(name) {
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
// var getTimeFromMinutes;
// function time (getTimeFromMinutes) {
//     if (typeof(getTimeFromMinutes) !== 'number') {
//         console.log (`${getTimeFromMinutes} не является числом`)
//     } else if (getTimeFromMinutes < 0) {
//         console.log (`${getTimeFromMinutes} отрицательное число`)
//     } else {
//         a = getTimeFromMinutes % 60
//         b = Math.floor(getTimeFromMinutes / 60)
//         if (a % 100 > 10 && a % 100 <= 20) {
//             aStr = (`${a} минут`)
//         } else if (a % 10 >= 2 && a % 10 < 5) {
//             aStr = (`${a} минуты`)
//         } else if (a % 10 === 1) {
//             aStr = (`${a} минута`)
//         } else if (a % 10 > 4 && a % 10 <= 9 || a % 10 === 0) {
//             aStr = (`${a} минут`)
//         }
//         if (b % 100 > 10 && b % 100 <= 20) {
//             bStr = (`${b} часa`)
//         } else if (b % 10 >= 2 && b % 10 < 5) {
//             bStr = (`${b} часa`)
//         } else if (b % 10 === 1) {
//             bStr = (`${b} час`)
//         } else if (b % 10 > 4 && b % 10 <= 9 || b % 10 === 0) {
//             bStr = (`${b} часов`)
//         }
//         getTimeFromMinutes = (`${bStr}, ${aStr}`)
//     }
//     return getTimeFromMinutes
// }
// var result = time (169)
// console.log (result)

// Наибольшее число
// function findMaxNumber(a, b ,c, d) {
//     // Самое простое - это использовать Math.max :)
//     // А оптимизировать такую проверку мы научимся совсем скоро
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b ,c, d);
//     }
// }

// findMaxNumber(1, 5, 6.6, 10.5);
// findMaxNumber(1, 5, '6', '10');

// числа фибаначи
// var num;
// function calcFibanachi (num) {
//     y = 0
//     x = 1
//     for (i = 0; i < num - 2; i++) {
//         x = y + x
//         y = x - y
//     }
//     return x
// }
// console.log(calcFibanachi(14))


// числа фибаначи 2, с выбором стартовых чисел
// var num;
// function calcFibanachi (col, num1, num2) {
//     x = [num1, num2];
//     for (i = 2; i < col; i++) {
//         x[i] = x[i - 1] + x [i - 2]
//     }
//     return x
// }
// console.log(calcFibanachi(14, 2, 3))


// Задание 35.1
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (plan) {
//         result = ''
//         const {age} = plan
//         const {languages} = plan.skills
//         result += (`Мне ${age} и я владею языками: `)
//         languages.forEach (function (x){
//             result += (`${x.toUpperCase()} `)
//         });
//         console.log (result)
//     }
// };

// function showExperience(plan) {
//     var {exp} = plan.skills
//     console.log (exp)
// }

// function showProgrammingLangs(plan) {
//     var {programmingLangs} = plan.skills
//         i = ''
//         for(let key in programmingLangs) {
//             i += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//         }
//         console.log(i)
// }

// showExperience(personalPlanPeter);
// showProgrammingLangs(personalPlanPeter)
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)

// вариант от курса
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });
//         return str;
//     }
// };
// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     console.log (exp);
//     return exp;
// }
// showExperience(personalPlanPeter);
// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }
//     console.log (str)
//     return str;
// }
// showProgrammingLangs(personalPlanPeter);



// Задание 35.2
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// function showFamily(arr) {
//     if (arr.length === 0) {
//         console.log (`Вы приемный`)
//     } else {
//         console.log (`Семья состоит из: ${arr}`)
//     }
// }
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
// function standardizeStrings(arr) {
//     i = ''
//     arr.forEach(function(x) {
//         i += `${x.toLowerCase()} \n`
//     })
//     console.log (i)
// }
// showFamily(family)
// standardizeStrings(favoriteCities)



// Переворот строки 
// sas = 'one ccxd< fsddas G?f sFASd.DAS'
// function reserse (str) {
//     if (typeof(str) !== "string") {
//         console.log('Это не строка !!!!')
//     } else {
//         console.log (str)
//         mass = str.split ("")
//         console.log (mass)
//     }
//     let result = ''
//     for (i = mass.length - 1; i > 0; i--) {
//         result += mass[i]
//     }
//     console.log (result)
// }   
// reserse (sas)
// console.log (sas[1])
// console.log (sas)



// Банкомат с проверкой наличие валюты 
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// const twoBanks = [...baseCurrencies, ...additionalCurrencies]
// const haveNoOneOnBanks = ['USD', 'RUB']
// console.log (twoBanks)
// function availableCurr (all, noVol) {
//     var result = 'Доступные валюты: \n';
//         col = [];
//     for (i = 0; i < all.length; i++) {
//         col[i] = 0;
//         for (a = 0; a < noVol.length; a++) {
//             if (all[i] !== noVol[a]) {
//                 col[i]++
//             }
//         }
//         if (col[i] === noVol.length) {
//             result += `${all[i]} \n`
//         }
//     }
//     console.log (result)
// }
// availableCurr(twoBanks, haveNoOneOnBanks)


// 38.1 магазин
// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 25,
//     budget: 50000
// }
// function isBudgetEnough(data) {
//     var costOnOneShop = [];
//     allCost = 0;
//     for (i = 0; i < data.shops.length; i++) {
//         costOnOneShop[i] = data.shops[i].width * data.shops[i].length * data.height * data.moneyPer1m3
//     }
//     for (i = 0; i < data.shops.length; i++) {
//         allCost = allCost + costOnOneShop[i]
//     }
//     if (allCost > data.budget) {
//         console.log ('Нет деняг(')
//     } else {
//         console.log ('Деньги есть')
//     }
// }
// isBudgetEnough (shoppingMallData)


// 38.2 игроки и игра 3х3х3
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort()
    var firstGroup = []
        secondGroup = []
        trerdGroup = []
        otherPeople = []
    for (i = 0; i < 3; i++) {
        firstGroup[i] = students[i]
    }
    for (i = 0; i < 3; i++) {
        secondGroup[i] = students[i + 3]
    }
    for (i = 0; i < 3; i++) {
        trerdGroup[i] = students[i + 6]
    }
    for (i = 0; i < students.length - 9; i++) {
        otherPeople[i] = students[i + 9]
    }
    console.log (`Первая группа ${firstGroup.join(', ')} \nВторая группа ${secondGroup.join(', ')} \nТретья группа ${trerdGroup.join(', ')}\nНе в игре ${otherPeople.join(', ')}`)
    console.log(firstGroup, secondGroup, trerdGroup, otherPeople)
}

sortStudentsByGroups(students)