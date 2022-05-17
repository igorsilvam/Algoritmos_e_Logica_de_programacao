/*

Capturar 2 números
e fazer as operações matemáticas de
soma, subtração, multiplicação, divisão e
resto da divisão.

E para cada operação, mostrar um alerta com resultado.
*/

alert("Bem-vindo a calculadora de dois números!");
let numerOne = prompt("Digite aqui o primeiro número:");
let numberTwo = prompt("Digite aqui o segundo número:");
numerOne = Number(numerOne);
numberTwo = Number(numberTwo);

const sum = numerOne + numberTwo;
const subtraction = numerOne - numberTwo;
const multiplication = numerOne * numberTwo;
const division = numerOne / numberTwo;
const restDivision = numerOne % numberTwo;

alert("Soma: " + sum);
alert("Subtração: " + subtraction);
alert("Multiplicação: " + multiplication);
alert("Divisão: " + division);
alert("Resto da divisão: " + restDivision);
