"use strict"

// Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.


let sec = parseFloat(prompt('Введіть кількість секунд', ''));
let hour = Math.floor(sec / 3600);
let minutes = Math.floor((sec % 3600) / 60);

document.write(`Скільки годин ${hour.toFixed(2)} <br>`);
document.write(`Скільки хвилин ${minutes.toFixed(2)} `);




