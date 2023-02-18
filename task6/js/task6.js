"use strict"


// Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.


const productOne = parseFloat(prompt('Вкажіть вартість першого товару', ''));
const numberProductOne = parseInt(prompt('Вкажіть кількість першого товару', ''));
const productTwo = parseFloat(prompt('Вкажіть вартість другого товару', ''));
const numberProductTwo = parseInt(prompt('Вкажіть кількість другого товару', ''));
const productThree = parseFloat(prompt('Вкажіть вартість третього товару', ''));
const numberProductThree = parseInt(prompt('Вкажіть кількість третього товару', ''));

const sumProductOne = productOne * numberProductOne;
const sumProductTwo = productTwo * numberProductTwo;
const sumProductThree = productThree * numberProductThree;
const sumAllProducts = sumProductOne + sumProductTwo + sumProductThree;


document.write(`Сумма першого товару     ${numberProductOne}x${numberProductOne}  ------${sumProductOne} <br>`);
document.write(`Сумма другого товару     ${productTwo}x${numberProductTwo}  ------${sumProductTwo} <br>`);
document.write(`Сумма третього товару     ${productThree}x${numberProductThree}  ------${sumProductThree} <br>`);
document.write(`Сумма всіх товарів ------${sumAllProducts}`);


