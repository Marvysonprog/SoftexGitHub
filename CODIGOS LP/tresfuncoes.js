const prompt = require('prompt-sync')();
 
function calcular(op, a, b) {
   
       switch (op) {
           case 1:
               return a + b;
               break;
           case 2:
               return a - b;
               break;
           case 3:
               return a * b;
               break;
           case 4:
               return a / b;
               break;
           default:
               return "UMA ESCOLHA INVÁLIDA!!!";
               break;
       }
       
   }
   
   function mensagemOperacao() {
 
       switch (operacao) {
           case 1:
               return "A operação selecionada foi SOMA";
               break;
           case 2:
               return "A operação selecionada foi SUBTRAÇÃO";
               break;
           case 3:
               return "A operação selecionada foi MULTIPLICAÇÃO";
               break;
           case 4:
               return "A operação selecionada foi DIVISÃO";
               break;
           default:
               return "NENHUMA OPÇÃO VÁLIDA FOI SELECIONADA";
               break;
       }
       
   }
   var operacao = parseInt(prompt(`Digite a operação a ser realizada:
                            1 - Para Soma;
                            2 - Para Subtração;
                            3 - Para Multiplicação;
                            4 - Para Divisão.`));
   var num1 = parseFloat(prompt("Digite o primeiro número para fazer o cálculo:"));
   var num2 = parseFloat(prompt("Digite o segundo número para fazer o cálculo:"));
   var iniCalc = (prompt("Iniciar o cálculo -> S para SIM ou N para Não:").toUpperCase());
   
   let result = calcular(operacao,num1,num2);
   let m = mensagemOperacao();
           
   var ini = (iniCalc == "S") ?
   () => console.log(`${m} e o resultado foi ${result.toFixed(2)}`) :
   () => console.log("A CALCULADORA NÃO FOI INICIADA!!!");
 
   ini();