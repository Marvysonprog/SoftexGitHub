interface CalculadoraSimples {
    numero1: number;
    numero2: number;
    operacao: symbol;
}

function getExecute(calc: CalculadoraSimples) {
    return eval(calc.numero1 + calc.operacao + calc.numero2);
}

class Somar implements CalculadoraSimples {
    numero1: number;
    operacao: symbol;
    numero2: number;
    constructor(numero1: number, numero2: number, operacao: symbol) {
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.operacao = operacao;
    }
};

class Subtrair implements CalculadoraSimples {
    numero1: number;
    numero2: number;
    operacao: symbol;
    constructor(numero1: number, numero2: number, operacao: symbol) {
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.operacao = operacao;
    }
};
class Multiplicar implements CalculadoraSimples {
    numero1: number;
    numero2: number;
    operacao: symbol;
    constructor(numero1: number, numero2: number, operacao: symbol) {
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.operacao = operacao;
    }
};

var sinaldesoma: symbol = "+";
var sinaldesubtracao: symbol = "-";
var sinaldemultiplicacao: symbol = "*";


var sum = new Somar(3, 2, sinaldesoma);
console.log(`Ao selecionar a operação soma o valor que a calculadora retorna é: ${getExecute(sum)}`);

var sub = new Subtrair(3, 2, sinaldesubtracao);
console.log(`Ao selecionar a operação subtrair o valor que a calculadora retorna é: ${getExecute(sub)}`);

var mult = new Subtrair(3, 2, sinaldemultiplicacao);
console.log(`Ao selecionar a operação multiplicar o valor que a calculadora retorna é: ${getExecute(mult)}`);