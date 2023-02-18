"use strict"


// Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

const min = 1, max = 12;
const monthRandomNumber = min + Math.floor(Math.random() * (max - min + 1));


const minDay = 0, maxDay = 6;
const dayRandomNumber = minDay + Math.floor(Math.random() * (maxDay - minDay + 1));

document.write(`Рондомний місяць ${monthRandomNumber} <br>`);
document.write(`Рондомний день ${dayRandomNumber}`);
