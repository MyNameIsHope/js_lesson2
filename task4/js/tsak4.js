"use strict"

// Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

let centimeters = parseFloat(prompt('Вкажіть довжину в сантиметрах', ''));

let sumMeters = centimeters / 100;
let sumKilometers = centimeters / 100000;

document.write(`Кількітсть метрів = ${sumMeters} <br>`);
document.write(`Кількітсть кілометрів = ${sumKilometers}`);