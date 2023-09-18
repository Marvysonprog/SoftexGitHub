const prompt = require('prompt-sync')();
var s = Symbol();
var num1, num2, result, restante;

console.log("BEM-VINVO A CALCULADORA!");
console.log("DIGITE OS NÚMEROS E ESCOLHA O OPERADOR PARA REALIZAR O CÁLCULO!")

num1 = parseInt(prompt("DIGITE O VALOR DO PRIMEIRO NÚMERO:"));
num2 = parseInt(prompt("DIGITE O VALOR DO SEGUNDO NÚMERO:"));

console.log("ESCOLHA O OPERADOR PARA REALIZAR O CALCULO!");

s = prompt("Digite o operador: + para SOMA, - para Subtração, * para Multiplicação, / para Divisão:");

if (s === "/") {
 

    if (eval(num1 % num2) == 0) {

        result = eval(num1 + s + num2);
        console.log(`O resultado da operação é: ${result}, sem resto`);

    } else {
         
        result = eval(num1 +  s + num2);
        restante = (eval(num1 + s + num2)) % num2;
        console.log(`O resultado da divisão é: ${result.toFixed(2)}`);
        console.log(`O resto da divisão é: ${restante.toFixed(2)}`);

    }

} else {

    result = eval(num1 +  s + num2);
    console.log(`O resultado da operação é: ${result}`);
}