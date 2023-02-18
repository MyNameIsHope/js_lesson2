"use strict"

// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості)


let theCostOfTheProduct = parseFloat(prompt('Введіть ціну товару', ''));
let quantityOfProduct = parseInt(prompt('Вкажіть кількість товару', ''));

let sumProduct = theCostOfTheProduct * quantityOfProduct;
let sumVat = (sumProduct / 100) * 5;


document.write(`загальня сумма товару = ${sumProduct} <br>`);
document.write(`сумма в ПДВ 5% = ${sumVat}`);
