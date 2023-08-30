

var num1, num2, operacao, resultado;



operacao = parseInt(prompt("Digite a operação: "));
num1 = parseInt(prompt("Digite o Primeiro numero: "));
num1 = parseInt(prompt("Digite o Segundo numero: "));

console.log("Bem-vindo a Calculadora: ");
console.log("DIGITE 1 - SOMA ");
console.log("DIGITE 2 - SUBTRAIR ");
console.log("DIGITE 3 - MULTIPLICAR ");
console.log("DIGITE 4 - DIVIDIR ");
console.log("DIGITE 0 - SAIR ");


switch (operacao) {
    case (1):
        resultado = num1 + num2;
        console.log(resultado)
        break;

    case (2):
        resultado = num1 - num2;
        console.log(resultado)
        break;

    case (3):
        resultado = num1 * num2;
        console.log(resultado)
        break;

    case (4):
        resultado = num1 / num2;
        console.log(resultado)
        break;

     case (0):
        console.log("PROGRAMA FINALIZADO!!")
        break;


    default:
        break;
}