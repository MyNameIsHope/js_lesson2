"use strict"

// Задача 0. Обчислити значення виразів



let a = parseFloat(prompt('Введіть перше число a', '0'));
let b = parseFloat(prompt('Введіть друге число b', '0'));
let c = parseFloat(prompt('Введіть друге число c', '0'));


let s1 = a + 12 + b;
let s2 = Math.sqrt((a + b) / (2 * a));
let s3 = Math.cbrt((a + b) * c);
let s4 = Math.sin((a / -b));


document.write(`s1 = ${s1} <br>`)
document.write(`s2 = ${s2} <br>`)
document.write(`s3 = ${s3} <br>`)
document.write(`s4 = ${s4}`)





