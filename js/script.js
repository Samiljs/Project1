"use strict";
///////////////////////////////////////////////////////////// 2.6
// let number = 4.6;

// const person = "Alex";
// const bool = false;

// // console.log(something);

// let und;
// console.log(und);

// const obj = {
//     name: 'John',
//     age: 25,
//     isMarried: false
// };

// // // console.log(obj.age);
// // console.log(obj['name']);

// // let arr = ['plum.png', 'orange.jpg', 'apple.bmp' ];
// // console.log(arr[0]);



// ///////////////////////////////////////////////////////////2.7
// // alert('Kisylinka');
// // const result = confirm("Are you here?");
// // console.log(result);
// // const answer = prompt("Вы любите Кисулинку?", "");
// // console.log(typeof(answer));
// // const answers = [];

// // answers[0] = prompt('What is your first name?', '');
// // answers[1] = prompt('What is your second name?', '');
// // answers[2] = prompt('How old are you', '');

// // document.write(answers);

// ///////////////////////////////////////////////////////////2.8

// // `const category = 'toys';

// // console.log(`https://someurl.com/${category}/5`);

// // const user = "Maksym";
// // alert(`Hello, ${user}`);`
// ///////////////////////////////////////////////////////////2.9

// console.log('arr' + ' - object');
// console.log(4 + ' - object');
// console.log(4 + +'5');

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;
// console.log(++incr);
// console.log(--decr);

// console.log(5%2);
// console.log(2 + 2 * 2 !== '6');


// //=== строгое сравнение
// //== сравнение по значению



// const checked = true,
//     closed = true;

//     console.log(checked || closed);
//     console.log(checked && closed);


    
//&& все значения  - правда 
//|| хотя бы одно из значений правда




////////////////////////////////PRACTICE 1/////////////////////////////////
let NOF = prompt('Сколько фильмов Вы уже посмотрели?','');

let NOF1 = {},
    NOF2= {};






const PMDB = {
    count:NOF,
    movies:NOF1,
    actors:NOF2,
    genres:[],
    privat: false

};

let FQ = prompt('Какой фильм Вы посмотрели последним?','');
let SQ = prompt('Какую оценку Вы бы ему поставили?','');
let TQ = prompt('Какой фильм Вы посмотрели последним?','');
let FOQ = prompt('Какую оценку Вы бы ему поставили?','');

PMDB.movies[FQ] = SQ;
PMDB.movies[TQ] = FOQ;

console.log(PMDB);
/////////////////////////////////////////////////////////////////////////////