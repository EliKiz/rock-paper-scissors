
const btn = document.querySelector('button'),
    btnParent = document.querySelector('.wrapper__btn'),
    finish = document.querySelector('h3');
    
    let scoreHumen = 0;
    let scoreComputer = 0;
    let scoreDraw = 0;
    
    const computerSelection = computerPlay();

    function score () {
        const resultPlace = document.querySelector('p');
        let computerScoreText = 'Computer score is: ' + scoreComputer;
        let humenScoreText = 'Humen score is: ' + scoreHumen;
        let drawScore = 'Draw scrore is: ' + scoreDraw;
        let score = computerScoreText + "<br>" + humenScoreText + "<br>" + drawScore;

        let humenWin = 'humen win';
        let computerWin = 'computer win';
        
        if (scoreComputer < 5 && scoreHumen < 5 ) {
            resultPlace.innerHTML = score;
        } else if ( scoreHumen === 5 ) {
            resultPlace.innerHTML = humenWin;
            // btnParent.removeEventListener('click', () =>{});
        }  else if (scoreComputer === 5 ) {
            // btnParent.removeEventListener('click', () =>{});
            resultPlace.innerHTML = computerWin;
        }
    }
    
    function chooseEvent () {
        let result;
        // btnParent.addEventListener('click',
        const choose = (e) => {
            if(e.target.id === 'scissors' ) {
            result = oneRaund('scissors', computerPlay());
            score();
            }
            else if(e.target.id === 'paper' ) {
            result = oneRaund('paper', computerPlay());
            score();
            }
            else if(e.target.id === 'rock' ) {
            result = oneRaund('rock', computerPlay());
            score();
            } 
            else { 
                return;
            }
            if (scoreHumen === 5 || scoreComputer === 5) {
                btnParent.removeEventListener('click',choose );
            }
            finish.innerHTML = result;
        }; 
    btnParent.addEventListener('click', choose);
    }
    chooseEvent();

function computerPlay () {
    let arr = ['rock', 'paper', 'scissors'];
    let choseElem = Math.floor(Math.random() * arr.length);
    return arr[choseElem];
}
function oneRaund(playerSelection, computerSelection ) {
    if( playerSelection === 'rock' && computerSelection === 'paper' ) {
        scoreComputer += 1;  
        return `Computer chooses ${computerSelection} - you lose`; 
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        scoreHumen += 1;  
        return `Computer chooses ${computerSelection} - you win`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'rock' ) {
        scoreDraw +=1;
        return `Computer chooses ${computerSelection} - draw`;
    }

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        scoreHumen += 1;  
        return `Computer chooses ${computerSelection} - you win`; 
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        scoreComputer += 1;  
        return `Computer chooses ${computerSelection} - you lose`; 
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        scoreDraw +=1;
        return `Computer chooses ${computerSelection} - draw`; 
    }

    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        scoreHumen += 1;  
        return `Computer chooses ${computerSelection} - you win`; 
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        scoreComputer += 1;  
        return `Computer chooses ${computerSelection} - you lose`; 
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        scoreDraw +=1;
        return `Computer chooses ${computerSelection} - draw`; 
    }
    
}



// // // console.log(oneRaund(playerSelection, computerPlay())); 

// // function game() {
// //     for(let i = 0; i<5; i++) {
// //         let playerSelection = prompt('Введите rock, paper или scissors');
// //         let result = oneRaund(playerSelection, computerPlay());
// //         console.log(result);
// //     }
// // }
// // console.log(game());


//  // === The doom ===
// //  const container = document.querySelector('#container');

// //  const content = document.createElement('div');
// //  content.classList.add('content');
// //  content.textContent = 'This is the glorious text-content!';
 
// //  const para = document.createElement('p');
// //  para.style.color = 'red';
// //  container.prepend(para);
// //  para.textContent = 'hi i am red';

// //  const title = document.createElement('h3');
// //  title.style.cssText = 'color: blue; font-size: 30px; text-decoration: underline; padding-left: 30px';
// // container.prepend(title);
// // title.innerHTML = 'i am blue title';


// // const bigContent = document.createElement('div');
// // bigContent.style.cssText = 'border: 2px solid black; background-color: pink; width: 200px; height: 150px';
// // container.appendChild(bigContent);
// //     const titleDiv = document.createElement('h1');
// //     titleDiv.style.color = 'green';
// //     bigContent.prepend(titleDiv);
// //     titleDiv.textContent = 'I inner div';
// //         const paraDiv = document.createElement('p');
// //         paraDiv.style.color = 'red';
// //         bigContent.append(paraDiv);
// //         paraDiv.innerHTML = "I inner div also";       

// //  container.appendChild(content);
//  // === / The doom ===

// //  const btn = document.querySelector('#baton');
// //  btn.addEventListener('click', function (e) {
// //     e.target.style.background = 'blue';
// //   });

// function getTime (time) {
//     const hours = Math.floor(time / 60);
//     const minutes = Math.floor(time % 60);
//     if (time < 0 || typeof(time) === 'string' ) {
//         return `Ошибка проверьте данные`;
//     }
//     else if (hours == 2 || hours == 3 || hours == 4 ) {
//         return `Это ${hours} часa и ${minutes} минут`;
//     }
//     else if (hours == 1) {
//         return `Это ${hours} час и ${minutes} минут`;
//     }
    
// return `Это ${hours} часов и ${minutes} минут`;
// }
// console.log(getTime(150));

// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal<0 || !Number.isInteger(minutesTotal) ) {
//         return 'Ошибка, проверьте данные';
//     }
//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;
//     let hoursStr = '';
//     switch(hours) {
//         case 0: 
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }
//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }
// console.log(getTimeFromMinutes(150));

// function findMaxNumber (a, b, c, d) {

//     if ( typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number' ) {
//         return 0;
//     } else { 
//        return Math.max(a, b, c, d);
//     }
// }
// console.log(findMaxNumber(1, 5, 6.6, 10.5));

// function findMaxNumber(arg1, arg2, arg3, arg4) {
//     let max = Math.max(arg1, arg2, arg3, arg4);
//     if ( typeof(arg1) == 'number' && typeof(arg2) == 'number' &&
//     typeof(arg3) == 'number' && typeof(arg4) == 'number') {
//         return max;
//     } else {
//         return 0;
//     }
// }
// console.log(findMaxNumber(1, 5, 6.6, 10.5));

// function fibonachi(count) {
//     let fib = [];
//     for ( let i = 0; i<count; i++  ) {
//         if(i == 0) {
//             fib[i] = 1;
//         } else if (i == 1) {
//             fib[i] = 2;
//         } else { fib[i] = fib[i-2 ] + fib[i-1];
//         }
//         return fib;
//     }
// }
// console.log(fibonachi(4));
 
// // === упражнение по написанию кода 2 

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng', 'eu', 'pol'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//             html: '22%'
//         },
//         exp: '1 month',
        
//     },
//     showAgeAndLangs: function(obj) {
//        const {age} = obj;
//         const {languages} = obj.skills;
//         const arr = languages.join(' ').toUpperCase();
//        return `Мне ${age} лет и я владею языками ${arr}  `;

//     }
//     // console.log(products.join('; '));
// };
// //  const {showAgeAndLangs} = personalPlanPeter.skills;
//  console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// // console.log(Object.keys(personalPlanPeter.skills.programmingLangs).length);


// // let www = (Object.keys(personalPlanPeter));
// // console.log(www)
// // for(let key in www ) {
// //     console.log(`${key} значнеие ${personalPlanPeter[key]}`);
// // }

// // function showProgramming(obj) { 
// //     if (Object.keys(personalPlanPeter.skills.programmingLangs).length === 0) {
// //         return '';
// //     } else {
// //         // const {js, php, html} = obj.skills.programmingLangs;
// //         // const auto = (Object.keys(personalPlanPeter.skills.programmingLangs));
// //         // const [one, two, three] = auto;
// //         let str = '';
// //         for(let key in personalPlanPeter.skills.programmingLangs) {
// //             str += `Язык ${key} and ${personalPlanPeter.skills.programmingLangs[key]} \n`;
// //         }
// //         return str;
// //     }
// // }


// console.log(showProgramming(personalPlanPeter));


// function showProgramming(plan) { 
    
//     const {programmingLangs} = plan.skills;
//     if(programmingLangs.length ===0 ) {
//         return '';
//     } else {
//        let str = '';
//     for( let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }
//     return str; 
//     }
    
    
// }

// console.log(showProgramming(personalPlanPeter));


// // === упражнение по написанию кода 2 

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// function showFamily(arr) { 
//     if(arr.length === 0) {
//         return 'Семья пуста';
//     }else { 
//         const arrey = arr.join(' ');
       
//         return `Семья состоит из: ${arrey}`;
//     }
// }
// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
// function standardizeStrings(arr) {
//     let arrq = arr.join('\n').toLowerCase();
//     return arrq;
// }
// console.log(standardizeStrings(favoriteCities));
//     function standardizeStrings(arr) {
//         arr.forEach(city => {
//             console.log(city.toLowerCase());
//         });
//     }
//     console.log(standardizeStrings(favoriteCities));
// // showAgeAndLangs: function(obj) {
// //     const {age} = obj;
// //      const {languages} = obj.skills;
// //      const arr = languages.join(' ').toUpperCase();
// //     return `Мне ${age} лет и я владею языками ${arr}  `;

// //  }

// // === // упражнение по написанию кода 2 

// // function showExperience(pane) {
// //     const {exp} = pane.skills;
// //     return exp;
// // }   
// // console.log(showExperience(personalPlanPeter));

    
// console.log(Object.keys(personalPlanPeter));


// // function showProgramming(obj) { 
// //     // let objk = Object.keys(personalPlanPeter.programmingLangs);
// //     const {js, php} = obj.skills;
// //     return `Язык  изучен на ${js} \n Язык  изучен на ${php}`;
// // }
// // console.log(showProgramming(personalPlanPeter));
// // console.log(js, php);
// // console.log(Object.keys(personalPlanPeter));

// // ===  упражнение по написанию кода 3 

// function reverse(str) { 
//     if( typeof(str) !== 'number') {
//        let revers = str.split("").reverse().join("");
//         return revers; 
//     } return 'ошибка';
    
// }
// console.log(reverse('2'));

// // const baseCurrencies = ['USD', 'EUR'];
// // const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// // function availableCurr(arr, missingCurr) {
// //     if(arr.length !== 0) {
// //         arr.forEach( (item, i) => { 
// //         if( item === missingCurr) {
// //             arr.splice(i, 1);
// //         }
        
// //         });
// //         let mom = arr.join('\n');
// //         return `Доступные валюты \n${mom} `;  
// //     }return 'нет доступных валют';
    
// // }

// // console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
//     for( let i = 0; i < arr.length; i++) {
//         if(arr[i] ===  missingCurr) {
//             continue;
//         }
//         str += `${arr[i]}\n`;
//     }
//     return str;
// }
// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

// // ===  / упражнение по написанию кода 3 

// // ===  упражнение по написанию кода продвинутое
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
//     moneyPer1m3: 30,
//     budget: 50000
// };
//     function isBudgetEnough(data) {
//         // const {shops} = shoppingMallData;
//         let sum = 0;
//         let volume = 0;

//         data.shops.forEach((item) => {
//             sum += item.length * item.width;
//             // console.log(sum);
//         });
//         volume = sum * data.height;
//         // console.log(volume);
       
//         if(data.budget - (volume * data.moneyPer1m3) >=0) {
//             return 'Бюджета достаточно';
//         } else { 
//             return 'Бюджета недостаточно';
//         }
//     }
//     console.log(isBudgetEnough(shoppingMallData));



//     const studentss = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     // console.log(arr);
//     let size = 3;
//     let sliced = [];
//     let del = [];
//     for(let i = 0; i<arr.length; i+= size) {
//         sliced.push(arr.slice(i, i + size));
//         // console.log(i);
//         if( i == 9) {
//             del.push(arr[i]);
//             // console.log('done');
//         }
//         console.log(del);
//         // for(let i = 0; i<arr.length; i++) {
//         //     console.log(arr[i]);
//         //     if(arr[i]>8) {
//         //         del.push(arr[i]);
//         //         console.log('done');
//         //     }
//         // }
//     }
    
//     // console.log(sliced.length);
    
//     console.log(sliced);
   
// }
// console.log(sortStudentsByGroups(students));
// // ===  / упражнение по написанию кода продвинутое 


// // const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// // function sortStudentsByGroups(arr) { 
// //     arr.sort();
// //     const a = [], b = [], c=[], rest = [];
// //     for (let i = 0; i<arr.length; i++) {
// //         console.log(i);
// //         if(i<3) {
// //             a.push(arr[i]);
// //         } else if (i<6) {
// //             b.push(arr[i]);
// //         } else if (i<9) {
// //             c.push(arr[i]);
// //         }else { 
// //             rest.push(arr[i]);
// //         }
// //     }
// //     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' :rest.join(',')}`];
// // }
// // console.log(sortStudentsByGroups(students));





// // const {openNow} = restorantData;
// // //     console.log(openNow);
// //     function isOpen(prop) {
// //         let answer = '';
// //         prop ?  answer = 'Открыто' : answer = 'Закрыто' ;
    
// //         return answer;
// //     }

// // console.log(isOpen(openNow)); 

// // // console.log(isOpen(restorantData.openNow));



// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true,
// };
// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     // console.log(fDish);
//     // console.log(sDish);
//     if (+fDish.price.slice(0, -1) + (sDish.price.slice(0,-1)) < +average.slice(0,-1)) {
//         // console.log(+fDish.price.slice(0, -1))
//         // console.log(sDish.price.slice(0,-1))
//         console.log(+average.slice(0,-1));
//         return 'Цена выше средней';
//     } else {
//         return 'Цена ниже средней';
//     }
// }
// console.log(isAverageLunchPriceTrue(restorantData.menu[3], restorantData.menu[1], restorantData.averageLunchPrice));
// function transferWaitors(data) {
//     const copy = {...data};
//     console.log(copy);
//     copy.waitors= [{name: 'Mike', age: 32}];
//     return copy;
// }

// console.log( transferWaitors(restorantData));



// function pow(x, n) {
//     if( n === 1 ) {
//         return x;
//     }else { 
//         return x * pow(x, n-1); 
//     }
// }
// console.log(pow(2, 3));



// let studentsq = {
//     js: [{
//       name: 'John',
//       progress: 100
//     }, {
//       name: 'Ivan',
//       progress: 60
//     }],
  
//     html: {
//       basic: [{
//         name: 'Peter',
//         progress: 20
//       }, {
//         name: 'Ann',
//         progress: 18
//       }],
  
//       pro: [{
//         name: 'Sam',
//         progress: 10
//       }],
//       semi: {
//           students: [{
//               name: 'Test',
//               progress: 100
//           }]
//       }
//     }
//   };

//   function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;
//     // for(let key in studentsq ) {
//     //     console.log(studentsq[key]);
//     // }
//     for(let course of Object.values(data)) {
//         if(Array.isArray(course)) {
//             students += course.length;
//             for(let i = 0; i<course.length; i++) {
//                 total += course[i].progress;
                
//             }
//         } else { 
//             for(let subcourse of Object.values(course)) {
//             students += subcourse.length; 
//             for(let i = 0; i<subcourse.length; i++) {
//                 total += subcourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
//   }

// // console.log(getTotalProgressByIteration(studentsq));

// function getTotalProgressByRecurion(data) {
//     if(Array.isArray(data)) { // Прверка на массив isArray
//         let total = 0;
//         for(let i = 0; i<data.length; i++) {
//             total += data[i].progress;
//             console.log(i);
//         }
//         // console.log([total, data.length]);
//         return [total, data.length];
//     } else { 
//         let total = [0,0];
//         for(let subData of Object.values(data)) { // перебор объекта только по значению 
//             const subDataArr = getTotalProgressByRecurion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }
//         return total;
//     }
// }
// const result = getTotalProgressByRecurion(studentsq);
// console.log( result[0] / result[1] );


// function factorial(number) {
//     if(number === 'String' || !Number.isInteger(number) || number < 0) {
//         console.error(`Число ${number} не является челым числом либо это строка`);
//     }else if (number <=0) {
//         return 1;
//     }
//     else if(number === 0) {
//         return 1;
//     } else { 
//         // console.log(number * factorial(number-1));
//         return number * factorial(number-1);
//     }
// }
// console.log(factorial(0));

// function fib(n) {
//     if( n<= 1  ) {
//         return n;
//     } else { 
//         return fib(n-1) + fib(n-2);
//     }
// }
// console.log(fib(77));

// let arrq = [
// 	1,
// 	[
// 		2, 7, 8
// 	],
// 	[
// 		3, 4, [5, [6, 7]],
// 	]
// ];
// function prim (arr) {
//     const result = [];
    
//     for(let elem of arr) { 
//         if(typeof elem == 'object') {
//             result.push(prim(elem));
//         } else { 
//             console.log(elem);
//         }
//     }
// }
// console.log(prim(arrq));


// // console.log((serch({a: 1, b: {c: 2, d: 3, e: 4}, 
// //     f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}})));

// function func(arr) {
// 	for( let i = 0; i < arr.length; i++) {
//         if(typeof arr[i] == 'object') {
//             arr[i] = func(arr[i]);
//         } else { 
//             arr[i] = arr[i] + '!';
//         }
//     }
//     return arr;
// }

// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));
    
// function flatten(...data) {
//     let result = [];
//     for(let i = 0; i<data.length; i++ ) {
//         const currentEl = data[i];
//         if (Array.isArray(currentEl)) {
//             result.push(...flatten(...currentEl));
//         }else { 
//             result.push(currentEl) ;
//         }
//     }
//     return result;
    
    
// }

// console.log(flatten([1, [2, [[3]]], 4, 5, [6, [7]] ]));

// const lol = ([1, [2, [[3]]], 4, 5, [6, [7]] ]);
// console.log(lol);

// function sumOfDigits(num) {
//     if(String(num).length === 0 ) {
//         return 1;
//     } else { 
//        return sumOfDigits(String(num).length - 1);
//     }
    
//     // return String(num).split('').length;

// }

// console.log(sumOfDigits(1));

// function sumOf(num) {
//     if(num <=9) {
//         return 1;
//     } else { 
//         return 1 + sumOf(num/10);
//     }
// }
// console.log(sumOf(100));

// function sumTo(n) {
//     let sum = 0; 
//     for(let i = 1; i<=n; n--) {
//         sum = sum + n;
//         // sum += i
//         // console.log(sum);
//     }
//     return sum;
// }
// console.log(sumTo(100));

// function sumToRec(n) {
//     if( n === 1 ) {
//         return 1;
//     } else { 
//         return n + sumToRec(n-1);
//     }
// }
// console.log(sumToRec(100));

// function sumToForm(n) { 
//     return n * (n+ 1) / 2;
// }
// console.log(sumToForm(100));

// function factoriall(n) {
//     if( n === 1) {
//         return 1; 
//     } else { 
//         return n * factoriall(n-1);
//     }
// }
// console.log(factoriall(5));
// // fiba
// function fib(n) {
//     if( n <=1  ) {
//         return n;
//     } else { 
//         return fib(n-1) + fib(n-2);
//     }
// }
// console.log(fib(55));


// function fibCercles(n) {
//     const result = [0, 1];
//     for(let i = 2; i<=n; i++) {
//         const prevNum1 = result[i-1];
//         const prevNum2 = result[i-2];
//         result.push(prevNum1 + prevNum2);
//     }
//     return result[n]; 
// }
// console.log(fibCercles(77));

// function fibonacciShort(num) {
//     let a = 1,
//         b = 1;
//     for(let i = 3; i<= num; i++) {
//         [a, b ] = [b,a + b];
//     }
//     return b;
// }
// console.log(fibonacciShort(10));

//   // задачи на рекурсию

// // let arr = [1, 2, 3, 4, 5];
// function show(arr) {
//     console.log(arr.shift(), arr);
//     if(arr.length !=0) {
//         show(arr);
//     }
// }
// // console.log(show(arr));

// let arr = [1, 2, 3, 4, 5];

// function getSum(arr) {
//     let sum = arr.shift();
//     let qua = Math.pow(sum, 2);
//     // let some = qua.shift();
//     // console.log(qua);
//     if( arr.length !== 0 ) {
//         qua += getSum(arr);
        
//     }
//     return qua;
// }
// console.log(getSum(arr));

//  let SomeObj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

//     // console.log(Object.entries(SomeObj));
//   // Кикита 
//  function newObj(obj) {
     
//     Object.entries(obj).forEach(([, value]) => {
//         if(typeof value === 'object') {
//             newObj(value);
//         } else { 
//             console.log(value);
//         }
//     });
//  }
// console.log(newObj(SomeObj));

// // function logObj(obj) {
// //     Object.entries(obj).forEach(([, value]) =>
// //     typeof value === 'object' ? logObj(value) : console.log(value));   
// // }
// // console.log(logObj(SomeObj));

// let object = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

// function getPrem(someObj) {
//     let sum = 0;
//     for( let elem in someObj) {
//         console.log(elem);
//         if(typeof(someObj[elem]) === 'object') {
//         sum += getPrem(someObj[elem]);
//         console.log(sum);
//     } else { 
//            sum += someObj[elem];
//        }
//     }
//     return sum;
    
// }
// console.log(getPrem(object));

// function getValuesObj(obj) {
//     let pop = [];
//     for(let key in obj) {
//         if(typeof(obj[key]) === 'object' ) {
//             pop.push(getValuesObj(obj[key]));
//         } else { 
//             pop.push(obj[key]);
//         }
//     }
//     return pop;
//     // console.log(Object.entries(object));
// }
// console.log(getValuesObj({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, 
//     k: {l: 7, m: {n: 8, o: 10}}}}));


// let SomeArray = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
// function get(...data) {
//     const res = [];
//     for(let i = 0; i<data.length; i++) {
//         const car = data[i];
//         if(Array.isArray(car)) {
//             res.push(...get(...car));
//         }else { 
//             res.push(car);
//         }
//     }return res.join('');
// }
// console.log(get(SomeArray));


// let AnotherArr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
// function getQudaratArr(...arr) {
//     let res = [];
//     for( let i = 0; i<arr.length; i++) {
//         const some = arr[i];
//         if(typeof some === 'object') {
//             res.push(...getQudaratArr(...some));
//         } else { 
//             res.push(Math.pow(arr[i], 2 ));
//         }
//     }
//     return res;
// }
// console.log(getQudaratArr(AnotherArr));

// function getQua(arr) {
//     let sas = [];
//     for(let i = 0; i<arr.length; i++) {
//         if( typeof arr[i] === 'object') {
//             sas.push(arr[i] = getQua(arr[i]));
//         } else { 
//             sas.push(Math.pow(arr[i], 2));
//         }
//     }
//     return sas;
// }
// console.log(getQua([1, [2, 7, 8], [3, 4], [5, [6, 7]]]));

// function flatten(...data) {
//     let result = [];
//     for(let i = 0; i<data.length; i++ ) {
//         const currentEl = data[i];
//         if (Array.isArray(currentEl)) {
//             result.push(...flatten(...currentEl));
//         }else { 
//             result.push(currentEl) ;
//         }
//     }
//     return result;
    
    
// }

// function getAllNames(data) {
//     if(Array.isArray(data)) {
//         let allStudents = [];
//         for(let i = 0; i < data.length; i++) {
//             allStudents += data[i].name;
//         }
//         return allStudents;
//     } else { 
//         let allStudents = [];
//         for(let subData of Object.values(data)) {
//             console.log(Object.values(data));
//             const subDataArr = getAllNames(subData);
//             allStudents += subDataArr;
//         }
//         return allStudents;

//     }

// }

// function getTotalProgressByRecurion(data) {
//     if(Array.isArray(data)) { // Прверка на массив isArray
//         let total = 0;
//         for(let i = 0; i<data.length; i++) {
//             total += data[i].progress;
//             console.log(i);
//         }
//         // console.log([total, data.length]);
//         return [total, data.length];
//     } else { 
//         let total = [0,0];
//         for(let subData of Object.values(data)) { // перебор объекта только по значению 
//             const subDataArr = getTotalProgressByRecurion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }
//         return total;
//     }
// }



// let studentsq = {
//     js: [{
//       name: 'John',
//       progress: 100
//     }, {
//       name: 'Ivan',
//       progress: 60
//     }],
  
//     html: {
//       basic: [{
//         name: 'Peter',
//         progress: 20
//       }, {
//         name: 'Ann',
//         progress: 18
//       }],
  
//       pro: [{
//         name: 'Sam',
//         progress: 10
//       }],
//       semi: {
//           students: [{
//               name: 'Test',
//               progress: 100
//           }]
//       }
//     }
//   };