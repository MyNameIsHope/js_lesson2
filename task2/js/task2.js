"use strict"

// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.


let yearOfBirth = parseInt(prompt('Вкажіть рік народження', ''));
const currentYear = parseInt(2023);

let numberOfYears = currentYear - yearOfBirth;

document.write(` Ваш вік = ${numberOfYears} років`)