"use strict"

// Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці


let numOne = parseInt(prompt('Введіть перше число', ''));
let numTwo = parseInt(prompt('Введіть друге число', ''));

let sumAdd = numOne + numTwo;
let sumMult = numOne * numTwo;
let sumDivision = numOne / numTwo;


document.write(`
<table>
<tr>
	<td>Сумма</td>
	<td>Добуток</td>
	<td>Частка</td>
</tr>

<tr>
	<td>${sumAdd}</td>
	<td>${sumMult}</td>
	<td>${sumDivision}</td>
</tr>
`)

